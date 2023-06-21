import * as Blockchains from '../datamodel/Blockchains'

export type CallViewFunctionRequest = {
  network: string
  body: Blockchains.CallViewFunctionInput
}

export type CallViewFunctionResponse = Blockchains.CallViewFunctionResult
