# EIP-7702 Undelegate

Self-sponsored example showing how to **undelegate** an EOA that was previously
delegated to a smart-contract account via [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702).
Undelegation works by submitting a Type-4 transaction whose authorization list
points the EOA's code at the zero address (`0x0000000000000000000000000000000000000000`).
After the tx is mined the EOA stops behaving as a smart account and reverts to a
plain externally owned account.

In this example the same Dfns wallet both signs the EIP-7702 authorization and
sends the transaction (self-sponsored). The authorization hash is signed by
calling `dfnsClient.wallets.generateSignature` with `kind: 'Hash'` — viem's
walletClient is not asked to sign authorizations because `DfnsWallet` does not
expose a `signAuthorization` method today.

## Prerequisites

You need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/developers/guides/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. Copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_ORG_ID` = Dfns Organisation ID (grab it in Dfns Dashboard: `Profile` > `Account`)
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `ETHEREUM_WALLET_ID` = a Dfns EVM [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet) on Sepolia that has been delegated via EIP-7702 and has enough ETH to pay gas

## Explanation

The script does the following:

1. Reads the current `eth_getCode` of the EOA. If the EOA is not delegated
   (code is `0x`) the script exits early — there is nothing to undelegate.
2. Fetches the EOA's current transaction count `N`.
3. Builds an EIP-7702 authorization tuple
   `{ chainId, address: 0x00...00, nonce: N + 1 }`. The `nonce` is `N + 1`
   (not `N`) because the sender's nonce is incremented before the
   authorization list is processed when the authority is also the tx origin.
4. Asks Dfns to sign the authorization with the wallet's secp256k1 key.
5. Sends a Type-4 transaction with that signed authorization in the
   `authorizationList`. `to` is set to the EOA itself with empty `data` so the
   transaction does nothing besides processing the authorization.
6. After mining, re-reads the EOA's code and prints it (expected: `0x`).

```shell
> ts-node main.ts

Current delegation code at 0x22ec29b7d4Bf13c6B011517A943B78Ba20BDd17B: 0xef0100a34e1e389097409aa65ff374af50b402e4a8f5c3
Submitted undelegation tx: 0x4786022bb7175684506d06be9a8ba69bee2c305f7d5417de00947650754b9651
Mined in block 11102362 with status=success
Code at 0x22ec29b7d4Bf13c6B011517A943B78Ba20BDd17B after undelegation: 0x
```
