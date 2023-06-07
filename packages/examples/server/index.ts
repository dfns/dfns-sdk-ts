import { AsymmetricKeySigner } from '@dfns/sdk-key-signer'
import { DfnsApiClient } from '@dfns/sdk'
import { TransactionKind } from '@dfns/sdk/codegen/datamodel/Wallets'

const main = async () => {
  const signer = new AsymmetricKeySigner({
    privateKey: '',
    credId: 'Y2ktMzgxaTEtZTF1bWgtOXY1cG9yY2tkZDd1dG1jYg',
    appOrigin: 'https://app.dfns.wtf',
    crossOrigin: false,
  })

  const client = new DfnsApiClient({
    appId: 'ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r',
    accessToken: '',
    baseUrl: new URL('https://api.dfns.wtf'),
    signer,
  })

  const list = await client.wallets.listTransactions({ walletId: 'wa-39abb-e9kpk-87p9t6l2pbbdjb8o' })

  console.log(JSON.stringify(list))

  const tx = await client.wallets.broadcastTransaction({
    walletId: 'wa-39abb-e9kpk-87p9t6l2pbbdjb8o',
    body: { kind: TransactionKind.Evm, to: '0xb282dc7cde21717f18337a596e91ded00b79b25f', value: '1000' },
  })

  console.log(tx)
}

main()
