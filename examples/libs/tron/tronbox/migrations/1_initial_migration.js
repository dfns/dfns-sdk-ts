const { DfnsWallet } = require('@dfns/lib-tron')
const { DfnsApiClient } = require('@dfns/sdk')
const { AsymmetricKeySigner } = require('@dfns/sdk-keysigner')
const TronWrap = require('tronbox/build/components/TronWrap')

console.log(process.env.DFNS_API_URL)

const signer = new AsymmetricKeySigner({
  privateKey: process.env.DFNS_PRIVATE_KEY,
  credId: process.env.DFNS_CRED_ID,
  appOrigin: process.env.DFNS_APP_ORIGIN,
})

const dfnsClient = new DfnsApiClient({
  appId: process.env.DFNS_APP_ID,
  authToken: process.env.DFNS_AUTH_TOKEN,
  baseUrl: process.env.DFNS_API_URL,
  signer,
})

DfnsWallet.init({ walletId: process.env.TRON_WALLET_ID, dfnsClient }).then((wallet) => {
  console.log('here')
  const tronWrap = Object.getPrototypeOf(TronWrap())
  console.log(tronWrap)
  tronWrap.address.fromPrivateKey = function (p) {
    console.log(p)
    return wallet.address
  }
  tronWrap.trx.sign = async function (transaction) {
    //console.log(JSON.stringify(transaction))
    //throw Error('boom')
    const signed = await wallet.signTransaction(transaction)
    console.log(JSON.stringify(signed))
    return signed
  }
  wallet = wallet
})

var Migrations = artifacts.require('./Migrations.sol')

module.exports = function (deployer) {
  // deployer.deploy(Migrations, { from: 'TCFSvhMjKqZu7Ate1MShznJzfssseSSKmj' })
}
