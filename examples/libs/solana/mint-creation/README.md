# Staking

Adapted from Solana [mint example](https://solana.com/developers/guides/token-extensions/mint-close-authority).

## Prerequisites

You need a `Service Account`: refer to the [developer guide](https://docs.dfns.co/guides/developers/service-account).

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.io`
- `DFNS_ORG_ID` = Dfns Organisation ID (see how to [find your organisation ID](https://docs.dfns.co/guides/find-organization-id))
- `DFNS_CRED_ID` = the `Signing Key Cred ID` of your service account
- `DFNS_PRIVATE_KEY` = the private key of your service account, the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the auth token of your service account, the value should start with `eyJ0...`
- `MINT_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/api-reference/wallets) ID
- `AUTHORITY_WALLET_ID`= another Dfns wallet

**note** _The authority wallet must have devnet SOL to stake and pay for gas._

## Explanation

The program runs on Solana devnet. In order to run the code, you would need a wallet acts as the [authority](https://explorer.solana.com/address/D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT?cluster=devnet) that holds some testSOL. The program will create the mint account, initialise the mint account data with a MintCloseAuthority extension. Then, the authority will close the mint account

```shell
> ts-node main.ts

mint: EG9FK991Hns7WwRGh85TNHqouYwcu6kEQPmnmyA16VJw
authority account: Fa61jgqzxxLgENcUfzNw2NFqMaPcbpNAfk5L3bML7jkP
mint creation confirmed: 21qZHcwGQt5Hqj46sDhim9WFmu7cVhywmxkEKEvE6t9jjA8iAj9LquSfqQxi9YTmSBSPAivAky3twFkBtmV8Myoj
mint account closure confirmed: 2sjZKMRB7yh1Z6AHPEyyBQnFv92bnJQmn9x14D45prKzUZpSEKhDJfjwEJesCtm4tjmdQ8J56euNr73HHbPnv9CK
```

This is a [mint account creation transaction](https://explorer.solana.com/tx/3wAgEQnZ2y5Gcekrs9a4R9WFXrjCwo9nBoDfvdnkcxxoR5ye7AQhCFxRgyEZXMgQTN5uTS3eQBHuMDxpoCBvrL2n?cluster=devnet) that created the mint account and initialise it. And this is the [mint closure transaction](https://explorer.solana.com/tx/456WcTDVY2PzrUxgRnamwyLpUJdgiLzbFYAKs8yfQLRdtuctqfZkjnbv8pu8L6XHj5HoXKKyv5rhQNeQGso41GzM?cluster=devnet).
