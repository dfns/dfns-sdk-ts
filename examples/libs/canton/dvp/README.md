# Canton DvP (cross-asset atomic swap)

Demonstrates an atomic Delivery-vs-Payment swap using the Utility Settlement App V1, with **three Dfns wallets** (`alice`, `bob`, `operator`) as the counterparties + settlement operator.

alice delivers `DELIVER_AMOUNT DELIVER_INSTRUMENT` ↔ bob pays `PAY_AMOUNT PAY_INSTRUMENT`. Both legs can live in different CIP-56 registries (e.g. Canton Coin vs a utility-app token).

## Prerequisites

- Three Dfns wallets (`alice`, `bob`, `operator`) on a Canton network, already funded with the amounts they owe. They may live on different validators as long as their participants share a synchronizer — multi-party confirmations are handled by Canton.
- The `utility-settlement-app-v1` DAR vetted on every participant that hosts one of the three parties.
- `CANTON_LEDGER_API` points at a participant from which this script can query and submit on behalf of all three parties. In practice that means one of:
  - a single participant hosting all three parties, or
  - a participant configured to submit on behalf of externally-hosted parties (topology + user rights granted).
- OAuth credentials for the ledger + the two registry URLs as in `.env.example`.

## Setup

Copy `.env.example` to `.env` and fill all the values. Then:

```shell
npm install
npm run exec
```

## What the script does

1. Probes each registry URL (`DELIVER_REGISTRY_URL`, `PAY_REGISTRY_URL`) to build an `admin → registry` map.
2. Idempotently bootstraps the Settlement App for the three parties — creates `OperatorConfiguration` + `UserService` for alice and bob only if missing.
3. **Propose**: alice exercises `UserService_ProposeDvp` on her UserService.
4. **Accept**: bob exercises `UserService_AcceptDvpProposal` → `Dvp` contract is created.
5. **Allocate** (×2): each sender exercises `AllocationFactory_Allocate`, filtered to their current instrument's holdings, against the registry owned by that instrument's admin.
6. **Settle**: operator exercises `Dvp_Settle`, merging choice-contexts fetched from each allocation's matching registry (disclosed contracts deduped).

Every write goes through `dfns.wallets.broadcastTransaction({ kind: 'Transaction', transaction: { commands, disclosedContracts } })` — Dfns prepares + signs the transaction on the authenticated wallet's behalf.

## Output

The script prints, for each ledger write, a Dfns transaction id and a Canton `updateId`. A final `✅ DvP settled.` marks success.
