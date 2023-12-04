# Staking

Adapted from Solana Cookbook's [staking example](https://solanacookbook.com/references/staking.html#create-stake-account).

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name
- Type of User, `Client Side`
- Relying Party = `localhost`
- Origin = `http://localhost:3000`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_APP_ORIGIN` = `http://localhost:3000`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `AUTHORITY_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) ID
- `STAKE_ACCOUNT_WALLET_ID`= another Dfns wallet

**note** _The authority wallet must have devnet SOL to stake and pay for gas._

## Explanation

The program runs on Solana devnet. In order to run the code, you would need a wallet acts as the [authority](https://explorer.solana.com/address/D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT?cluster=devnet) that holds some testSOL. The program will stake `100000000` lamports of testSOL with the [stake account wallet](https://explorer.solana.com/address/8HwdrUPCBryfxzNDsAXsSBU67yegpyZ12H38UNXD6Vja?cluster=devnet).

```shell
> ts-node main.ts

Authority: D1FRN8fYGKsrEj5ZtsHDbksZ6xFbmsDeUNYBn8Xn46nT
Stake account: 8HwdrUPCBryfxzNDsAXsSBU67yegpyZ12H38UNXD6Vja
Stake account created: 2dsD4PiUbCpKQ7CisdFqaVpfnYqbTP2U1Cg3EwdddtBFPDi5NdGsrQakAXmxnLZyejScJCCveNT15BwQuDKBFtST
Stake account balance: 100000000
Stake account status: inactive
Selected validator: i7NyKBMJCA9bLM2nsGyAGCKHECuR2L5eh4GqFciuwNT
Delegated stake to validator: 5uTvWD5zVxBNaxahoS1r3prNrHnt9kBoR3xf7NXJ4oswLHkXX6eau4SG3vDftSaAaSNRVgDetLAowkaft55cvvcj
Stake account status: activating
```

This is a [transaction](https://explorer.solana.com/tx/2dsD4PiUbCpKQ7CisdFqaVpfnYqbTP2U1Cg3EwdddtBFPDi5NdGsrQakAXmxnLZyejScJCCveNT15BwQuDKBFtST?cluster=devnet) that created the stake account. Note that multiple signers, both the authority wallet and the stake account wallet signed the same transaction. And this is a [transaction](https://explorer.solana.com/tx/5uTvWD5zVxBNaxahoS1r3prNrHnt9kBoR3xf7NXJ4oswLHkXX6eau4SG3vDftSaAaSNRVgDetLAowkaft55cvvcj?cluster=devnet) that delegated the stake to a [validator](https://explorer.solana.com/address/i7NyKBMJCA9bLM2nsGyAGCKHECuR2L5eh4GqFciuwNT?cluster=devnet) and activated the stake account.
