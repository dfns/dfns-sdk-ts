import dotenv from "dotenv"
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

dotenv.config()

//* Environment variables
const { ETHERSCAN_API_KEY, ALCHEMY_API_KEY } = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      chainId: 80001, // Chain ID for Mumbai
    },
  },
  //* Verifying a contract means making its source code public, and we do so using Etherscan
  //* https://etherscan.io/
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: false,
  },
}

export default config