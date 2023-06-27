# ethers.js Examples

## Uniswap

Adapted from Uniswap's [trading example](https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts).

The program runs on Ethereum Goerli testnet. In order to run the code, you would need a [Goerli wallet](https://goerli.etherscan.io/address/0xe896b7db170a7b5a64c49761f4ec1ded3cee98b1) that holds some GoerliETH. The program will convert `1000000` wei of GoerliETH to [Wrapped ETH](https://goerli.etherscan.io/address/0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6), and then swap them for [testnet USDT](https://goerli.etherscan.io/address/0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49).

Here's an on-chain [transaction](https://goerli.etherscan.io/tx/0x5672e93713d5cd7128f7e5540322e9c8eafd47f17429fd6d9126551ce9723a99) that traded the swap.
