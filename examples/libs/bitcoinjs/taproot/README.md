# Taproot example transfer

This example is an adaptation of this repository: https://github.com/Eunovo/taproot-with-bitcoinjs using Dfns wallet.
The original blog post about this script can be found there: https://dev.to/eunovo/a-guide-to-creating-taproot-scripts-with-bitcoinjs-lib-4oph

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `BITCOIN_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `BITCOIN_NODE_URL` = a Bitcoin node to broadcast the signed transaction

## Explanation

In order to run the program, you would need a Dfns taproot bitcoin wallet. 
After starting the script you will need to send some UTXO to the address when prompted. 
On Bitcoin Signet with a fee of 1 sat/vB 1000 satoshis will be enough.

```shell
> ts-node main.ts

Running "Pay to Pubkey with taproot example"
Waiting till UTXO is detected at this Address: tb1ph97zustmss80y652k6gyc9j4ccghu2zeevp0yjs6eyaalty5xc8s5n595l
[
  {
    txid: '2cbd9ffe3cfecd8bdc81a1e83412aaafbfe4504076f5a7ae8bb5720e4cd9bf6f',
    vout: 0,
    status: { confirmed: false },
    value: 1000
  }
]
Using UTXO 2cbd9ffe3cfecd8bdc81a1e83412aaafbfe4504076f5a7ae8bb5720e4cd9bf6f:0
Broadcasting Transaction Hex: 020000000001016fbfd94c0e72b58baea7f5764050e4bfafaa1234e8a181dc8bcdfe3cfe9fbd2c0000000000ffffffff0152030000000000001976a91459cada50314c829e19f5a7786f8ee0d4987f429d88ac01406484b7433482629203796d99d80e83c33c1a6a2b4eb88c0b6ac1339785a1fb98154deb94ecb4c7dfed44ae0fa2a084f37a8ef259d8a05fecfb940ff9bf04561000000000
Success! Txid is 4bf436518bbb80e0611233271aa358c3617b225d86dd19d2cb3d6bd21e554f95
Running "Taptree example"
Waiting till UTXO is detected at this Address: tb1p8jrr24ss9kd2l3w7dqk7a606qz02jze4g6ezfmt8h4xc4fg09vasg6j42g
[
  {
    txid: 'd85061752ba6235ed04fdb17d96601120dcf5247aebeccc35a24494ea4a2713d',
    vout: 0,
    status: { confirmed: false },
    value: 1000
  }
]
Trying the Hash lock spend path with UTXO d85061752ba6235ed04fdb17d96601120dcf5247aebeccc35a24494ea4a2713d:0
Broadcasting Transaction Hex: 020000000001013d71a2a44e49245ac3ccbeae4752cf0d120166d917db4fd05e23a62b756150d80000000000ffffffff0152030000000000001976a91459cada50314c829e19f5a7786f8ee0d4987f429d88ac0440ac5a0a6ec76b3d5a8b80b79d4c55c7f91adf9d478e86a8aedfef6aa3511a5a7d0ae36d595146e637d2260b600a811f63f0b42116b5555dd1fe173e97ffc3d5260653454352455439a9142d261cc8cd214eccdfe4b0fa6a1d9576ae08a0c38820b54709bb7102c7645f18945eff6e2e1b9d7d72dc0eb33bbc90f3eb8617d24d35ac41c0e90ce2942b31e4b2ad5358006324512f87ff24ec94a2d0135365e29fb28d9f5895164eb266311b70c61f81dd4c46c95e1e0678b6312a2d8fa688bfe3a2810da400000000
Success! Txid is df1553aecb3e44dc905f61b1150e7a03852dbf8dcc3574fc72da5d740145c62b
Waiting till UTXO is detected at this Address: tb1p8jrr24ss9kd2l3w7dqk7a606qz02jze4g6ezfmt8h4xc4fg09vasg6j42g
[
  {
    txid: 'd85061752ba6235ed04fdb17d96601120dcf5247aebeccc35a24494ea4a2713d',
    vout: 0,
    status: { confirmed: false },
    value: 1000
  }
]
Trying the Hash lock spend path with UTXO d85061752ba6235ed04fdb17d96601120dcf5247aebeccc35a24494ea4a2713d:0
Broadcasting Transaction Hex: 020000000001013d71a2a44e49245ac3ccbeae4752cf0d120166d917db4fd05e23a62b756150d80000000000ffffffff0152030000000000001976a91459cada50314c829e19f5a7786f8ee0d4987f429d88ac01401036ffba310d39348b3faa33dec4af6024630da5d6a45ab67c7b88f43d115b195e7887230974d1f638b77e1a70d454d5d1e4c7589332cb158bf56b798dda652500000000
Success! Txid is df1553aecb3e44dc905f61b1150e7a03852dbf8dcc3574fc72da5d740145c62b
```

This is the Bitcoin signet [transaction](https://blockstream.info/signet/tx/df1553aecb3e44dc905f61b1150e7a03852dbf8dcc3574fc72da5d740145c62b).
