import dotenv from 'dotenv'
import { nativeTransfer } from './transfers/native'
import { erc20Transfer } from './transfers/erc20'

dotenv.config()

const main = async () => {
  // await nativeTransfer()
  // await erc20Transfer()
}

main()
