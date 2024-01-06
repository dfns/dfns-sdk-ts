# Hardhat Deploy

Adapted from Hardhat [deploy documentation](https://hardhat.org/hardhat-runner/docs/guides/deploying).

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
- `POLYGON_MUMBAI_WALLET_ID` = a Dfns [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) on Polygon Mumbai (L1)
- `POLYGON_MUMBAI_PROVIDER_URL` = a Polygon Mumbai Goerli RPC provider node you have access to

**note** _the wallet must have Ethereum Goerli testnet ETH to deposit to Base and pay for gas_

## Explanation

Hardhat comes with a toolset for deploying a smart contract, usually living in `scripts/deploy.ts`. Usually, to deploy it you need a private key which you would need to safe keep. However, using DFNS you can rely in our infrastructure and use a DFNS wallet instead. The deploy script would then use this wallet, lock `0.001` into the smart contract, and allow you to withdraw it from Polygonscan via Wallet Connect using the DFNS Dashboard.

```shell
> npx hardhat run scripts/deploy.ts --network mumbai
Lock with 0.001ETH and unlock timestamp 1704464926 deployed to 0xA47e318fC48AC62e932c651Ad7ba088F501C0cA8

```

This is the Polygon Mumbai [transaction](https://mumbai.polygonscan.com/tx/0x548179272e816a731529ed2dad3b184adcf4c822e3536b156640f41e6a097350) that deployed the contract. By using `signer` as the Ethers.js `v6` DFNS instance, we were able to create the smart contract with the DFNS wallet as the owner.

You can then verify the smart contract using Hardhat as you would normally would, just ensure you are using the explorer API key (e.g., Polygonscan) for the network you are verifying the contract for.

```shell
> npx hardhat verify --network mumbai 0xA47e318fC48AC62e932c651Ad7ba088F501C0cA8 1704464926
Successfully submitted source code for contract
contracts/Lock.sol:Lock at 0xA47e318fC48AC62e932c651Ad7ba088F501C0cA8
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Lock on the block explorer.
https://mumbai.polygonscan.com/address/0xA47e318fC48AC62e932c651Ad7ba088F501C0cA8#code
```