import { initEccLib, script } from "bitcoinjs-lib";
import * as ecc from 'tiny-secp256k1'
initEccLib(ecc)

import { StakingScriptData, stakingTransaction, withdrawTimelockUnbondedTransaction } from "@babylonlabs-io/btc-staking-ts"
import { networks, Psbt } from "bitcoinjs-lib";
import { DfnsWallet } from '@dfns/lib-bitcoinjs'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'

import { Figment } from './figment'
import dotenv from 'dotenv'

const initDfnsWallet = async (walletId: string) => {
  const signer = new AsymmetricKeySigner({
    credId: process.env.DFNS_CRED_ID!,
    privateKey: process.env.DFNS_PRIVATE_KEY!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return DfnsWallet.init({ walletId, dfnsClient })
}

dotenv.config()

async function comparePayloads(payload: { amount: number, public_key: string, address: string, duration: number, utxos: { txid: string, vout: number, value: number, script_pubkey: string }[] }) {
  const figment = new Figment(process.env.FIGMENT_API_KEY!)

  const { amount, public_key, address, duration, utxos } = payload

  const stakeTransaction = await figment.babylonStakes({
    "network": "staging",
    "amount": amount,
    "pubkey": public_key,
    "taproot_pubkey": public_key,
    "address": address,
    "duration": duration,
    "change_address": address,
    "utxos": utxos
  })

  const stakerPubkey = Buffer.from(public_key, "hex")
  const finalityProviders = stakeTransaction.data.finality_providers.map((provider) => Buffer.from(provider, "hex"));
  const covenantPks = stakeTransaction.data.covenant_pubkeys.map((pk) => Buffer.from(pk, "hex"));
  const magicBytes = Buffer.from(stakeTransaction.data.magic_bytes, "hex");

  const stakingScriptData = new StakingScriptData(
    stakerPubkey,
    finalityProviders,
    covenantPks,
    stakeTransaction.data.covenant_threshold,
    duration,
    stakeTransaction.data.min_unbonding_time,
    magicBytes,
  );
  const {
    timelockScript,
    unbondingScript,
    slashingScript,
    dataEmbedScript,
    unbondingTimelockScript,
  } = stakingScriptData.buildScripts();

  // stakingTransaction constructs an unsigned BTC Staking transaction
  const unsignedStakingPsbt = stakingTransaction(
    {
      timelockScript,
      unbondingScript,
      slashingScript,
      dataEmbedScript
    },
    amount,
    address,
    utxos.map((utxo) => ({ ...utxo, scriptPubKey: utxo.script_pubkey })),
    networks.testnet,
    stakeTransaction.data.fee_rate,
    undefined,
    stakeTransaction.data.lock_height,
  );

  const deserializedPsbt = Psbt.fromHex(stakeTransaction.data.unsigned_transaction_serialized, { network: networks.testnet })

  console.log(deserializedPsbt.txOutputs[0].address)
  console.log(unsignedStakingPsbt.psbt.txOutputs[0].address)

  return deserializedPsbt.txOutputs[0].address == unsignedStakingPsbt.psbt.txOutputs[0].address
}

async function unbondTransaction() {
  const wallet = await initDfnsWallet(process.env.BITCOIN_WALLET_ID!)
  const figment = new Figment('6bc637fee622ae44f686f7289c60976e')

  const stake_id = '7454d1da-c3aa-49cc-8f7f-1916277c8de7'
  const network = 'signet'

  const lastTx = await figment.babylonUnbondTransaction(stake_id, network)
  const psbt = Psbt.fromHex(lastTx.data.unsigned_transaction_serialized)
  const signedPsbt = await wallet.SignPsbt(psbt)

  signedPsbt.finalizeAllInputs()

  const unbonding_tx = signedPsbt.extractTransaction()
  const signed_signature_hex = unbonding_tx.ins[0].witness[0].toString("hex")

  await figment.babylonBroadcastUnbondTransaction(stake_id, network, unbonding_tx.toHex())
}

async function stakeOwnAndWithdraw() {
  const wallet = await initDfnsWallet(process.env.BITCOIN_WALLET_ID!)

  console.log(wallet.address)
  console.log(wallet.publicKey.toString('hex'))
  console.log(wallet.internalPubkey!.toString('hex'))

  const figment = new Figment(process.env.FIGMENT_API_KEY!)

  const payload = {
    amount: 50000,
    public_key: "3b39b51bba6518e335d551b2bc991ee7717238a82241c361900cbc43979c48bd",
    address: "tb1p8vum2xa6v5vwxdw42xetexg7uachyw9gyfquxcvspj7y89uufz7srvc0s7",
    duration: 1,
    utxos: [
      {
        "txid": "5dd97bfd4d8aa6d9762871bc6d134b339dca938d7ed5b8980f9ed1f278756151",
        "vout": 0,
        "value": 700000,
        "script_pubkey": "51203b39b51bba6518e335d551b2bc991ee7717238a82241c361900cbc43979c48bd"
      }
    ]
  }

  const { amount, public_key, address, duration, utxos } = payload

  const stakeTransaction = await figment.babylonStakes({
    "network": "testnet",
    "amount": amount,
    "pubkey": public_key,
    "taproot_pubkey": public_key,
    "address": address,
    "duration": duration,
    "change_address": address,
    "utxos": utxos
  })

  const stakerPubkey = Buffer.from(public_key, "hex")
  const finalityProviders = stakeTransaction.data.finality_providers.map((provider) => Buffer.from(provider, "hex"));
  const covenantPks = stakeTransaction.data.covenant_pubkeys.map((pk) => Buffer.from(pk, "hex"));
  const magicBytes = Buffer.from(stakeTransaction.data.magic_bytes, "hex");

  const stakingScriptData = new StakingScriptData(
    stakerPubkey,
    finalityProviders,
    covenantPks,
    stakeTransaction.data.covenant_threshold,
    duration,
    stakeTransaction.data.min_unbonding_time,
    magicBytes,
  );
  const {
    timelockScript,
    unbondingScript,
    slashingScript,
    dataEmbedScript,
    unbondingTimelockScript,
  } = stakingScriptData.buildScripts();

  // stakingTransaction constructs an unsigned BTC Staking transaction
  const unsignedStakingPsbt = stakingTransaction(
    {
      timelockScript,
      unbondingScript,
      slashingScript,
      dataEmbedScript
    },
    amount,
    address,
    utxos.map((utxo) => ({ ...utxo, scriptPubKey: utxo.script_pubkey })),
    networks.testnet,
    stakeTransaction.data.fee_rate,
    undefined,
    stakeTransaction.data.lock_height,
  );


  const figmentPsbt = Psbt.fromHex(stakeTransaction.data.unsigned_transaction_serialized)
  console.log(figmentPsbt.data.inputs[0])

  console.log(unsignedStakingPsbt.psbt)
  console.log(unsignedStakingPsbt.psbt.data.inputs[0])
  delete unsignedStakingPsbt.psbt.data.inputs[0].unknownKeyVals
  unsignedStakingPsbt.psbt.data.inputs[0].tapInternalKey = stakerPubkey
  console.log(unsignedStakingPsbt.psbt.data.inputs[0])
  console.log(unsignedStakingPsbt.psbt.txOutputs[0])
  console.log(unsignedStakingPsbt.psbt.txOutputs[2])
  
  const signedStakingPsbt = await wallet.SignPsbt(unsignedStakingPsbt.psbt)

  signedStakingPsbt.finalizeAllInputs()

  const stakingTx = signedStakingPsbt.extractTransaction()

  console.log('staking tx:')
  console.log(stakingTx.toHex())

  const stakingOutputIndex = 0
  const unsignedWithdrawalPsbt: { psbt: Psbt, fee: number } = withdrawTimelockUnbondedTransaction(
    {
      timelockScript,
      slashingScript,
      unbondingScript,
    },
    stakingTx,
    payload.address,
    networks.testnet,
    stakeTransaction.data.fee_rate,
    stakingOutputIndex,
  );

  console.log(script.toASM(timelockScript))

  console.log(unsignedWithdrawalPsbt)
  console.log(unsignedWithdrawalPsbt.psbt.data.inputs[0])
  console.log(unsignedWithdrawalPsbt.psbt.data.inputs[0].tapLeafScript)
  console.log(script.toASM(unsignedWithdrawalPsbt.psbt.data.inputs[0].tapLeafScript![0].script))
  console.log(unsignedWithdrawalPsbt.psbt.txOutputs[0])
  console.log(unsignedWithdrawalPsbt.psbt.data.inputs)
  console.log(unsignedWithdrawalPsbt.psbt.txOutputs)


  const signedWithdrawalPsbt = await wallet.SignPsbt(unsignedWithdrawalPsbt.psbt)
  signedWithdrawalPsbt.finalizeAllInputs()

  const withdrawalTx = signedWithdrawalPsbt.extractTransaction()

  console.log('withdrawal tx:')
  console.log(withdrawalTx.toHex())

}

async function stakeFigmentAndWithdraw() {
  const wallet = await initDfnsWallet(process.env.BITCOIN_WALLET_ID!)
  const figment = new Figment(process.env.FIGMENT_API_KEY!)

  const payload = {
    amount: 50000,
    public_key: "3b39b51bba6518e335d551b2bc991ee7717238a82241c361900cbc43979c48bd",
    address: "tb1p8vum2xa6v5vwxdw42xetexg7uachyw9gyfquxcvspj7y89uufz7srvc0s7",
    duration: 1,
    utxos: [
      {
        "txid": "5e73cd98e86c6ef10f7261779f6ad6493cdd9f5a2ca614722a5994ab3b0a86e8",
        "vout": 2,
        "value": 589740,
        "script_pubkey": "51203b39b51bba6518e335d551b2bc991ee7717238a82241c361900cbc43979c48bd"
      }
    ]
  }

  const { amount, public_key, address, duration, utxos } = payload

  const stakeTransaction = await figment.babylonStakes({
    "network": "signet",
    "amount": amount,
    "pubkey": public_key,
    "taproot_pubkey": public_key,
    "address": address,
    "duration": duration,
    "change_address": address,
    "utxos": utxos
  })

  const stakerPubkey = Buffer.from(public_key, "hex")
  const finalityProviders = stakeTransaction.data.finality_providers.map((provider) => Buffer.from(provider, "hex"));
  const covenantPks = stakeTransaction.data.covenant_pubkeys.map((pk) => Buffer.from(pk, "hex"));
  const magicBytes = Buffer.from(stakeTransaction.data.magic_bytes, "hex");

  const stakingScriptData = new StakingScriptData(
    stakerPubkey,
    finalityProviders,
    covenantPks,
    stakeTransaction.data.covenant_threshold,
    duration,
    stakeTransaction.data.min_unbonding_time,
    magicBytes,
  );
  const {
    timelockScript,
    unbondingScript,
    slashingScript,
    dataEmbedScript,
    unbondingTimelockScript,
  } = stakingScriptData.buildScripts();


  const figmentPsbt = Psbt.fromHex(stakeTransaction.data.unsigned_transaction_serialized, { network: networks.testnet })
  const signedFigmentPsbt = await wallet.SignPsbt(figmentPsbt)
  signedFigmentPsbt.finalizeAllInputs()
  const figmentStakingTx = signedFigmentPsbt.extractTransaction()

  console.log('figment staking tx:')
  console.log(figmentStakingTx.toHex())

  console.log(figmentPsbt.data.inputs[0])
  console.log(figmentPsbt.txOutputs[0])
  console.log(figmentPsbt.txOutputs[2])

  const stakingOutputIndex = 0
  const unsignedWithdrawalPsbt: { psbt: Psbt, fee: number } = withdrawTimelockUnbondedTransaction(
    {
      timelockScript,
      slashingScript,
      unbondingScript,
    },
    figmentStakingTx,
    payload.address,
    networks.testnet,
    stakeTransaction.data.fee_rate,
    stakingOutputIndex,
  );

  console.log(script.toASM(timelockScript))

  console.log(unsignedWithdrawalPsbt)
  console.log(unsignedWithdrawalPsbt.psbt.data.inputs[0])
  console.log(unsignedWithdrawalPsbt.psbt.data.inputs[0].tapLeafScript)
  console.log(script.toASM(unsignedWithdrawalPsbt.psbt.data.inputs[0].tapLeafScript![0].script))
  console.log(unsignedWithdrawalPsbt.psbt.txOutputs[0])
  console.log(unsignedWithdrawalPsbt.psbt.data.inputs)
  console.log(unsignedWithdrawalPsbt.psbt.txOutputs)


  const signedWithdrawalPsbt = await wallet.SignPsbt(unsignedWithdrawalPsbt.psbt)
  console.log(signedWithdrawalPsbt.data.inputs[0])
  console.log(signedWithdrawalPsbt.data.inputs[0].tapLeafScript![0].script)
  signedWithdrawalPsbt.finalizeAllInputs()

  console.log(signedWithdrawalPsbt.data.inputs[0])

  const withdrawalTx = signedWithdrawalPsbt.extractTransaction()

  console.log('withdrawal tx:')
  console.log(withdrawalTx.toHex())

}

async function unbondStake() {
  const wallet = await initDfnsWallet(process.env.BITCOIN_WALLET_ID!)
  const figment = new Figment(process.env.FIGMENT_API_KEY!)


  const stake_id = '6e6a99fe-0cab-4702-abe3-5b13cdbd8947'
  const network = 'staging'

  const unbondTransaction = await figment.babylonUnbondTransaction(stake_id, network)
  const figmentPsbt = Psbt.fromHex(unbondTransaction.data.unsigned_transaction_serialized, { network: networks.testnet })


  const signedFigmentPsbt = await wallet.SignPsbt(figmentPsbt)



  const unbonding_tx = signedFigmentPsbt.finalizeAllInputs().extractTransaction().toHex()
  // console.log(unbonding_tx.getHash().toString('hex'))

  console.log(unbonding_tx)

  const stuff = await figment.babylonBroadcastUnbondTransaction(stake_id, network, unbonding_tx)

  console.log(stuff)


}

async function start() {

  //await unbondStake()

  // await stakeFigmentAndWithdraw()
  // throw 'stuff'

  console.log('compare output address for SegWit')
  console.log(await comparePayloads({
    amount: 50000,
    public_key: "fcd53170c109cdca74f14e1ff52470252acb51a2160dde536979864b75a0c6db",
    address: "tb1q7xxn8ectx35xuzpzmmxanpwl9tk2phq60w42pa",
    duration: 64000,
    utxos: [
      {
        "txid": "a610d4ef64cc9a342d689cc6207d066684ea583cc6b4392ffc4cb5ad1849be43",
        "vout": 2,
        "value": 664036,
        "script_pubkey": "0014f18d33e70b34686e0822decdd985df2aeca0dc1a"
      }
    ]
  }))

  console.log('compare output address for TapRoot')
  console.log(await comparePayloads({
    amount: 50000,
    public_key: "abb6b300ce899ff8cfd9fb09c794056360f4a08063a272167361c42d8c28f7d3",
    address: "tb1p4wmtxqxw3x0l3n7elvyu09q9vds0fgyqvw38y9nnv8zzmrpg7lfsn2ve5n",
    duration: 150,
    utxos: [
      {
        "txid": "9bcca49d0fe6dc98f7b106c9a96b8cca870283e192e045349d5aa24009a05a55",
        "vout": 0,
        "value": 40000,
        "script_pubkey": "5120abb6b300ce899ff8cfd9fb09c794056360f4a08063a272167361c42d8c28f7d3"
      },
      {
        "txid": "f3f93a7f21975cfa034fa6d0edd2adefccbd1772ab7f24a9ae17ad271415256f",
        "vout": 2,
        "value": 44006,
        "script_pubkey": "5120abb6b300ce899ff8cfd9fb09c794056360f4a08063a272167361c42d8c28f7d3"
      }
    ]
  }))

}

start().then(() => process.exit());
