import { DfnsWallet } from '@dfns/lib-ethersjs6'
import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-keysigner'
import dotenv from 'dotenv'
import { JsonRpcProvider } from 'ethers'
import { ethers } from 'hardhat'

dotenv.config()

const polygonMumbai = new ethers.JsonRpcProvider(process.env.POLYGON_MUMBAI_PROVIDER_URL!)

const initDfnsWallet = (walletId: string, provider: JsonRpcProvider | null = null) => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  const dfnsClient = new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    authToken: process.env.DFNS_AUTH_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })

  return new DfnsWallet({
    walletId: walletId,
    dfnsClient,
    maxRetries: 10,
  }).connect(provider)
}


async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = ethers.parseEther("0.001");
  const dfnsWallet = initDfnsWallet(process.env.POLYGON_MUMBAI_WALLET_ID!, polygonMumbai)

  const lock = await ethers.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
    signer: dfnsWallet
  })

  await lock.waitForDeployment();

  console.log(
    `Lock with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
