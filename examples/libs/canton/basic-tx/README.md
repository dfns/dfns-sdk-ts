# Canton Coin transaction

Demonstrates a Canton Coin CIP-56 transfer using [Canton SDK](https://docs.digitalasset-staging.com/integrate/devnet/token-standard/index.html).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `CANTON_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `CANTON_LEDGER_API` = Your canton participant ledger API 
- `CANTON_VALIDATOR_API` = Your canton validator API
- `OPEN_ID_DISCOVERY_URL` = URL to the configuration file for the OAuth 2.0 protocol
- `OAUTH_CLIENT_ID` = OAuth 2 Client id
- `OAUTH_CLIENT_SECRET` = OAuth 2 Client secret
- `OAUTH_AUDIENCE` = OAuth 2 audience
- `TRANSFER_FACTORY_REGISTRY_URL` = Canton coin transfer factory, this url is different for each environment

**note** _the wallet must have Canton Coin to make the transfer_

## Explanation

To execute the code, you will need a wallet containing some Canton Coin. The program is designed to send 1 Canton Coin from the wallet to another address.
The program can be executed in two modes: 'binary' or 'commands':
- In 'binary' mode, the transaction must already been prepared before being sent.
- In 'commands' mode, the commands and the disclosed contracts can be directly passed, Dfns backend will take care of preparing the transaction before signing it

```shell
> ts-node main.ts

Wallet address: dfnsdev1::12200b177c740e0bf3ef985a6be16d7c4bc1960943334f5f4fbd026f97fa96b053f9
Network: CantonDevnet
Dfns transaction id tx-4aibo-eqfio-8sipe8movpq3vbhr
Canton updateId 12201412b9505ad5d6e739791affbdee33e6becb0989d2a1e53e6469f20ce37d63fa
```

This is the Canton [transaction](https://devnet.ccview.io/updates/12201412b9505ad5d6e739791affbdee33e6becb0989d2a1e53e6469f20ce37d63fa/).
