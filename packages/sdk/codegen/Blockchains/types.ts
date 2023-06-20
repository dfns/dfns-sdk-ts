import * as Blockchains from '../datamodel/Blockchains'

export type EvmBlockchainFeeRequest = {
  network: string
}

export type EvmBlockchainFeeResponse = Blockchains.EvmFeeEstimates
