import { SDK, type TokenProviderConfig } from '@canton-network/wallet-sdk'
import {
  ALLOCATION_INTERFACE_ID,
  ALLOCATION_REQUEST_INTERFACE_ID,
  HOLDING_INTERFACE_ID,
  type AllocationRequestView,
  type AllocationView,
  type HoldingView,
} from '@canton-network/core-token-standard'
import { AuthTokenProvider } from '@canton-network/core-wallet-auth'
import { TokenStandardService } from '@canton-network/core-token-standard-service'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import * as dotenv from 'dotenv'

dotenv.config()

// Utility Settlement App template IDs (name-based — the DAR must be vetted on the participant).
const PKG = '#utility-settlement-app-v1'
const M_OP = `${PKG}:Utility.Settlement.App.V1.Model.Configuration.Operator`
const M_USER = `${PKG}:Utility.Settlement.App.V1.Service.User`
const M_DVP = `${PKG}:Utility.Settlement.App.V1.Model.Dvp`

const env = (k: string) => process.env[k] ?? (() => { throw new Error(`Missing env var ${k}`) })()

const auth: TokenProviderConfig = {
  method: 'client_credentials',
  configUrl: env('OPEN_ID_DISCOVERY_URL'),
  credentials: {
    clientId: env('OAUTH_CLIENT_ID'),
    clientSecret: env('OAUTH_CLIENT_SECRET'),
    audience: env('OAUTH_AUDIENCE'),
    scope: undefined,
  },
}

const dfns = new DfnsApiClient({
  orgId: env('DFNS_ORG_ID'),
  authToken: env('DFNS_AUTH_TOKEN'),
  baseUrl: env('DFNS_API_URL'),
  signer: new AsymmetricKeySigner({ credId: env('DFNS_CRED_ID'), privateKey: env('DFNS_PRIVATE_KEY') }),
})

// Redacting log adapter — strips bearer tokens that the SDK otherwise logs at INFO.
const SENSITIVE = new Set(['access_token', 'accessToken', 'id_token', 'refresh_token', 'token'])
const redact = (v: unknown): unknown =>
  Array.isArray(v) ? v.map(redact)
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v as object).map(([k, x]) => [k, SENSITIVE.has(k) ? '[REDACTED]' : redact(x)]))
  : v
const redactingLogAdapter: any = {
  log(level: string, ctx: any, message?: string) {
    const c = redact(ctx) as any
    const ns = c?.namespace ? `(${c.namespace})` : ''
    console.log(`${level.toUpperCase()} ${ns}`, message ?? '', Object.keys(c ?? {}).filter(k => k !== 'namespace' && k !== 'timestamp').length ? c : '')
  },
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function submit(walletId: string, command: unknown, disclosedContracts: unknown[] = []): Promise<string> {
  const broadcast = await dfns.wallets.broadcastTransaction({
    walletId,
    body: { kind: 'Transaction', transaction: { commands: [command], disclosedContracts } as any },
  })
  // Poll until the Canton tx is confirmed and we have an updateId.
  let lastStatus: string | undefined
  for (let i = 0; i < 180; i++) {
    const tx = await dfns.wallets.getTransaction({ walletId, transactionId: broadcast.id })
    if (tx.status !== lastStatus) { console.log(`  dfnsId=${broadcast.id} status=${tx.status}${tx.txHash ? ` txHash=${tx.txHash}` : ''}${tx.reason ? ` reason=${tx.reason}` : ''}`); lastStatus = tx.status }
    if (tx.status === 'Failed' || tx.status === 'Rejected') {
      throw new Error(`Dfns tx ${broadcast.id} ${tx.status}: ${tx.reason ?? '(no reason)'}`)
    }
    // Once it's Broadcasted with a txHash, the Canton ledger has the tx — don't wait for Confirmed.
    if ((tx.status === 'Confirmed' || tx.status === 'Broadcasted') && tx.txHash) {
      console.log(`  updateId=${tx.txHash}`)
      return tx.txHash
    }
    await sleep(1000)
  }
  throw new Error(`Dfns tx ${broadcast.id} did not confirm within 180s`)
}

async function main() {
  const [alice, bob, operator] = await Promise.all([
    dfns.wallets.getWallet({ walletId: env('ALICE_WALLET_ID') }),
    dfns.wallets.getWallet({ walletId: env('BOB_WALLET_ID') }),
    dfns.wallets.getWallet({ walletId: env('OPERATOR_WALLET_ID') }),
  ])
  console.log(`alice:    ${alice.address}\nbob:      ${bob.address}\noperator: ${operator.address}`)

  // Boot the read-only SDK + construct a TokenStandardService directly from its
  // internal ledgerProvider — this bypasses the extension's validatorUrl requirement.
  const sdk = await SDK.create({ auth, ledgerClientUrl: env('CANTON_LEDGER_API'), logAdapter: redactingLogAdapter })
  const ctx = (sdk as any).ctx
  const tokens = new TokenStandardService(ctx.ledgerProvider, ctx.logger, new AuthTokenProvider(auth, ctx.logger), false)

  // Registries: admin → url (probe each registry for its admin party).
  const deliverAdmin = await tokens.getInstrumentAdmin(env('DELIVER_REGISTRY_URL'))
  const payAdmin = await tokens.getInstrumentAdmin(env('PAY_REGISTRY_URL'))
  const registries = new Map([[deliverAdmin, env('DELIVER_REGISTRY_URL')], [payAdmin, env('PAY_REGISTRY_URL')]])
  console.log(`\ndeliver admin=${deliverAdmin}\npay     admin=${payAdmin}`)

  const acs = async (party: string, templateId: string) => {
    const rows = await sdk.ledger.acs.read({ parties: [party], templateIds: [templateId], filterByParty: true })
    return rows.map((r: any) => ({ contractId: r.contractId, createArgument: r.createArgument }))
  }

  // 1) Bootstrap idempotently — OperatorConfiguration + one UserService per user.
  let opConfigCid = (await acs(operator.address!, `${M_OP}:OperatorConfiguration`))[0]?.contractId
  if (!opConfigCid) {
    console.log('\nCreate OperatorConfiguration:')
    await submit(operator.id, { CreateCommand: {
      templateId: `${M_OP}:OperatorConfiguration`,
      createArguments: { operator: operator.address, userRequirements: [] },
    }})
    opConfigCid = (await acs(operator.address!, `${M_OP}:OperatorConfiguration`))[0].contractId
  }
  for (const w of [alice, bob]) {
    if ((await acs(w.address!, `${M_USER}:UserService`)).length) continue
    console.log(`\nOnboard ${w.address!.split('::')[0]}:`)
    await submit(w.id, { CreateCommand: {
      templateId: `${M_USER}:UserServiceRequest`,
      createArguments: { operator: operator.address, user: w.address },
    }})
    const req = (await acs(operator.address!, `${M_USER}:UserServiceRequest`)).find((c) => (c.createArgument as any).user === w.address)!
    await submit(operator.id, { ExerciseCommand: {
      templateId: `${M_USER}:UserServiceRequest`, contractId: req.contractId,
      choice: 'UserServiceRequest_Accept',
      choiceArgument: { operatorConfigurationCid: opConfigCid, credentialCids: [] },
    }})
  }

  // 2) Propose: alice delivers, bob pays.
  const aliceService = (await acs(alice.address!, `${M_USER}:UserService`))[0]
  const now = new Date()
  const terms = {
    id: `dfns-dvp-${Date.now()}`,
    deliveries: [{ instrument: { admin: deliverAdmin, id: env('DELIVER_INSTRUMENT') }, amount: env('DELIVER_AMOUNT') }],
    payments:   [{ instrument: { admin: payAdmin,     id: env('PAY_INSTRUMENT')     }, amount: env('PAY_AMOUNT')     }],
    createdAt: now.toISOString(),
    allocateBefore: new Date(now.getTime() + 3600_000).toISOString(),
    settleBefore:   new Date(now.getTime() + 7200_000).toISOString(),
  }
  console.log(`\nPropose DvP ${terms.id}:`)
  await submit(alice.id, { ExerciseCommand: {
    templateId: `${M_USER}:UserService`, contractId: aliceService.contractId,
    choice: 'UserService_ProposeDvp',
    choiceArgument: { proposerIsBuyer: false, counterparty: bob.address, terms },
  }})

  // 3) Accept: bob turns the proposal into a Dvp.
  const bobService = (await acs(bob.address!, `${M_USER}:UserService`))[0]
  const proposal = (await acs(bob.address!, `${M_DVP}:DvpProposal`)).find((c) => (c.createArgument as any).terms.id === terms.id)!
  console.log(`\nAccept DvpProposal ${proposal.contractId}:`)
  await submit(bob.id, { ExerciseCommand: {
    templateId: `${M_USER}:UserService`, contractId: bobService.contractId,
    choice: 'UserService_AcceptDvpProposal',
    choiceArgument: { cid: proposal.contractId, payload: {} },
  }})

  // 4) Allocate: each sender backs their legs against the leg's registry,
  // filtered to that instrument's holdings only.
  for (const w of [alice, bob]) {
    const requests = (await tokens.listContractsByInterface<AllocationRequestView>(ALLOCATION_REQUEST_INTERFACE_ID, w.address!))
      .filter((r) => (r.interfaceViewValue.settlement.settlementRef as any).id === terms.id)
    for (const r of requests) {
      for (const [legId, leg] of Object.entries(r.interfaceViewValue.transferLegs)) {
        if (leg.sender !== w.address) continue
        const registry = registries.get(leg.instrumentId.admin)!
        const holdings = await tokens.listContractsByInterface<HoldingView>(HOLDING_INTERFACE_ID, w.address!)
        const inputUtxos = holdings
          .filter((h) => !h.interfaceViewValue.lock
            && h.interfaceViewValue.instrumentId.admin === leg.instrumentId.admin
            && h.interfaceViewValue.instrumentId.id === leg.instrumentId.id)
          .map((h) => h.contractId)
        console.log(`\nAllocate ${leg.amount} ${leg.instrumentId.id} (leg ${legId}) via ${registry}:`)
        const [cmd, disclosed] = await tokens.allocation.createAllocationInstruction(
          { settlement: r.interfaceViewValue.settlement, transferLegId: legId, transferLeg: leg },
          leg.instrumentId.admin, registry, inputUtxos,
          r.interfaceViewValue.settlement.requestedAt,
        )
        await submit(w.id, { ExerciseCommand: cmd }, disclosed as any[])
      }
    }
  }

  // 5) Settle: operator calls Dvp_Settle with per-allocation choice-contexts from the matching registry.
  const dvp = (await acs(operator.address!, `${M_DVP}:Dvp`)).find((c) => (c.createArgument as any).terms.id === terms.id)!
  const allocs = (await tokens.listContractsByInterface<AllocationView>(ALLOCATION_INTERFACE_ID, operator.address!))
    .filter((a) => (a.interfaceViewValue.allocation.settlement.settlementRef as any).id === terms.id)
  const allocationCids: string[] = []
  const extraArgss: unknown[] = []
  const disclosedMap = new Map<string, unknown>()
  for (const a of allocs) {
    const admin = a.interfaceViewValue.allocation.transferLeg.instrumentId.admin
    const ctx2 = await tokens.allocation.fetchExecuteTransferChoiceContext(a.contractId, registries.get(admin)!)
    allocationCids.push(a.contractId)
    extraArgss.push({ context: ctx2.choiceContextData, meta: { values: {} } })
    for (const dc of ctx2.disclosedContracts ?? []) disclosedMap.set((dc as any).contractId, dc)
  }
  console.log(`\nSettle Dvp ${dvp.contractId}:`)
  await submit(operator.id, { ExerciseCommand: {
    templateId: `${M_DVP}:Dvp`, contractId: dvp.contractId,
    choice: 'Dvp_Settle',
    choiceArgument: { allocationCids, extraArgss },
  }}, Array.from(disclosedMap.values()))

  console.log('\n✅ DvP settled.')
}

main().catch((err) => { console.error(err); process.exit(1) })
