# Aptos multi agent transaction with aptos sdk

Demonstrates a multi-agent APTOS transfer from a Dfns wallet to itself using the aptos sdk. We first create an object which will be
owned by a first wallet and then, we will transfer the ownership to another wallet (it will require a multisig transaction)

See aptos sdk's [example](https://github.com/aptos-labs/aptos-ts-sdk/blob/main/examples/typescript/multi_agent_transfer.ts) for a complete guide.

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = your Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `APTOS_SENDER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `APTOS_RECEIVER_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID

**note** _the wallet must have APT to pay for fees_

## Explanation

The program runs on the APTOS testnet. To execute the code, you will need to fund the wallet with some testnet tokens.

```shell
> ts-node main.ts

sender wallet address:  0xc41bb642f85e26b0e71d9d82bcb96cf2ac94a1ccfdb35b7fee1d4a57390a32c8
receiver wallet address:  0x66bcf6b7eeb7c23351d3d5c831911530377aa74eaed40a00d535832116aa1c4d
creating a new object owned by sender
created object address: 0x6ced9e7032b4cee1ac70b9e257a98739a363ee88b8954df5da010656af93707e
ownership transfer transaction created
sender signed
receiver signed
transaction broadcasted: 0x8a8c6d88677c3eb92ad00a12a48119ae83fc80ce05ec96cd352208d43c9e7a1b
checking if the object has a new owner
ownership transferred: true
```

This is the transfer [transaction](https://explorer.aptoslabs.com/txn/6525224700?network=testnet).
