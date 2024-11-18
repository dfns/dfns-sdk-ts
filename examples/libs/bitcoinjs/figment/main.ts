import { initEccLib } from "bitcoinjs-lib";
import * as ecc from 'tiny-secp256k1'
initEccLib(ecc)

import { StakingScriptData, stakingTransaction } from "btc-staking-ts";
import { networks, Psbt } from "bitcoinjs-lib";

import { Figment } from './figment'
import dotenv from 'dotenv'

dotenv.config()

async function comparePayloads(payload: { amount: number, public_key: string, address: string, duration: number, utxos: { txid: string, vout: number, value: number, script_pubkey: string }[] }) {
  const figment = new Figment(process.env.FIGMENT_API_KEY!)

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

async function start() {
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
    duration: 1200,
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
