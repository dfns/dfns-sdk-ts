import * as Blockchains from '../datamodel/Blockchains'

export type EvmBlockchainFeeRequest = {
  network: string
}

export type EvmBlockchainFeeResponse = Blockchains.EvmFeeEstimates

export type CallViewFunctionRequest = {
  network: string
  body: Blockchains.CallViewFunctionInput
}

export type CallViewFunctionResponse = Blockchains.CallViewFunctionResult
