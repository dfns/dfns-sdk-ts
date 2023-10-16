import {
  Amount,
  BlockchainAddress,
  BlockchainNetwork,
  DocumentSnapshot,
  EntityId,
  Initiator,
  IntegerPositiveStrict,
  IsoDatetime,
  PublicKey,
  Tag,
} from '../Foundations'

// FIXME: Missing documentation for SignatureResponse
export type SignatureResponse = {
  // FIXME: Missing documentation for r
  r: string

  // FIXME: Missing documentation for s
  s: string

  // FIXME: Missing documentation for recid
  recid: number
}

// FIXME: Missing documentation for PublicKeyRecord
export type PublicKeyRecord = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for publicKey
  publicKey: PublicKey

  // FIXME: Missing documentation for signerIds
  signerIds: string[]

  // FIXME: Missing documentation for groupThreshold
  groupThreshold: number

  // FIXME: Missing documentation for groupSize
  groupSize: number

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for isEddsa
  isEddsa: boolean

  // FIXME: Missing documentation for maxPresigs
  maxPresigs?: number
}

// FIXME: Missing documentation for GetPublicKeyAddressResponse
export type GetPublicKeyAddressResponse = {
  // FIXME: Missing documentation for publicKeyId
  publicKeyId: string

  // FIXME: Missing documentation for network
  network: string

  // FIXME: Missing documentation for address
  address: BlockchainAddress
}

// FIXME: Missing documentation for Signature
export type Signature = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for publicKeyId
  publicKeyId: string

  // FIXME: Missing documentation for hash
  hash: string

  // FIXME: Missing documentation for r
  r: string

  // FIXME: Missing documentation for s
  s: string

  // FIXME: Missing documentation for recid
  recid: number

  // FIXME: Missing documentation for status
  status: SignatureStatus

  // FIXME: Missing documentation for initiator
  initiator: Initiator

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime
}

// FIXME: Missing documentation for CosmosDenomAmount
export type CosmosDenomAmount = {
  // FIXME: Missing documentation for denom
  denom: string

  // FIXME: Missing documentation for amount
  amount: string
}

// FIXME: Missing documentation for CosmosTimeoutHeight
export type CosmosTimeoutHeight = {
  // FIXME: Missing documentation for revisionNumber
  revisionNumber: string

  // FIXME: Missing documentation for revisionHeight
  revisionHeight: string
}

// FIXME: Missing documentation for EvmGenericTx
export type EvmGenericTx = {
  // FIXME: Missing documentation for templateKind
  templateKind: TransactionTemplateKind.EvmGenericTx

  // FIXME: Missing documentation for to
  to: string

  // FIXME: Missing documentation for gasLimit
  gasLimit: Amount

  // FIXME: Missing documentation for gasPrice
  gasPrice: Amount

  // FIXME: Missing documentation for nonce
  nonce?: string

  // FIXME: Missing documentation for value
  value?: string

  // FIXME: Missing documentation for data
  data?: string

  // FIXME: Missing documentation for publicKeyId
  publicKeyId?: string

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  /**
   * the maximum amount of gas to be included as a tip to the miner
   */
  maxPriorityFeePerGas?: Amount

  /**
   * the maximum amount of gas willing to be paid for the transaction (inclusive of baseFeePerGas and maxPriorityFeePerGas)
   */
  maxFeePerGas?: Amount

  // FIXME: Missing documentation for typedData
  typedData?: Eip712TypedData
}

// FIXME: Missing documentation for CosmosIbcTransferTx
export type CosmosIbcTransferTx = {
  // FIXME: Missing documentation for templateKind
  templateKind: TransactionTemplateKind.CosmosIbcTransfer

  // FIXME: Missing documentation for sourcePort
  sourcePort: string

  // FIXME: Missing documentation for sourceChannel
  sourceChannel: string

  // FIXME: Missing documentation for token
  token: CosmosDenomAmount

  // FIXME: Missing documentation for sender
  sender: string

  // FIXME: Missing documentation for receiver
  receiver: string

  // FIXME: Missing documentation for timeoutHeight
  timeoutHeight: CosmosTimeoutHeight

  // FIXME: Missing documentation for timeoutTimestamp
  timeoutTimestamp: string

  // FIXME: Missing documentation for publicKeyId
  publicKeyId?: string

  // FIXME: Missing documentation for network
  network: BlockchainNetwork
}

// FIXME: Missing documentation for Eip712TypedData
export type Eip712TypedData = {
  // FIXME: Missing documentation for types
  types: Record<string, unknown>

  // FIXME: Missing documentation for values
  values: Record<string, unknown>

  // FIXME: Missing documentation for domain
  domain?: Eip712TypedDataDomain
}

// FIXME: Missing documentation for Eip712TypedDataDomain
export type Eip712TypedDataDomain = {
  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for chainId
  chainId?: string

  // FIXME: Missing documentation for version
  version?: string

  // FIXME: Missing documentation for verifyingContract
  verifyingContract?: string

  // FIXME: Missing documentation for salt
  salt?: string
}

// FIXME: Missing documentation for SolanaTxInstruction
export type SolanaTxInstruction = {
  // FIXME: Missing documentation for data
  data: string

  // FIXME: Missing documentation for programId
  programId: string

  // FIXME: Missing documentation for keys
  keys: SolanaTxAccountMeta[]
}

// FIXME: Missing documentation for SolanaTx
export type SolanaTx = {
  // FIXME: Missing documentation for feePayer
  feePayer?: string

  // FIXME: Missing documentation for blockhash
  blockhash?: string

  // FIXME: Missing documentation for lastValidBlockHeight
  lastValidBlockHeight?: IntegerPositiveStrict

  // FIXME: Missing documentation for minNonceContextSlot
  minNonceContextSlot?: IntegerPositiveStrict

  // FIXME: Missing documentation for instructions
  instructions: SolanaTxInstruction[]

  // FIXME: Missing documentation for signatures
  signatures?: SolanaTxSignature[]

  // FIXME: Missing documentation for templateKind
  templateKind: TransactionTemplateKind.SolanaTx
}

// FIXME: Missing documentation for SolanaTxSignature
export type SolanaTxSignature = {
  // FIXME: Missing documentation for signature
  signature: string

  // FIXME: Missing documentation for publicKey
  publicKey: string
}

// FIXME: Missing documentation for SolanaTxAccountMeta
export type SolanaTxAccountMeta = {
  // FIXME: Missing documentation for pubkey
  pubkey: string

  // FIXME: Missing documentation for isSigner
  isSigner: boolean

  // FIXME: Missing documentation for isWritable
  isWritable: boolean
}

// FIXME: Missing documentation for TronTx
export type TronTx = {
  // FIXME: Missing documentation for visible
  visible?: boolean

  // FIXME: Missing documentation for txID
  txID?: string

  // FIXME: Missing documentation for contract_address
  contract_address?: string

  // FIXME: Missing documentation for raw_data_hex
  raw_data_hex?: string

  // FIXME: Missing documentation for raw_data
  raw_data: Record<string, unknown>

  // FIXME: Missing documentation for templateKind
  templateKind: TransactionTemplateKind.TronTx
}

// FIXME: Missing documentation for TezosTx
export type TezosTx = {
  // FIXME: Missing documentation for protocol
  protocol?: string

  // FIXME: Missing documentation for chain
  chain?: string

  // FIXME: Missing documentation for block
  block?: string

  // FIXME: Missing documentation for payload
  payload: TezosTxPayload

  // FIXME: Missing documentation for templateKind
  templateKind: TransactionTemplateKind.TezosTx
}

// FIXME: Missing documentation for TezosTxPayload
export type TezosTxPayload = {
  // FIXME: Missing documentation for branch
  branch?: string

  // FIXME: Missing documentation for contents
  contents: Record<string, unknown>[]
}

// FIXME: Missing documentation for BroadcastedTransaction
export type BroadcastedTransaction = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for transaction
  transaction: TransactionPayload

  // FIXME: Missing documentation for snapshot
  snapshot: DocumentSnapshot

  // FIXME: Missing documentation for network
  network: BlockchainNetwork

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime

  // FIXME: Missing documentation for status
  status: TransactionStatus

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for networkResponse
  networkResponse?: string

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime

  // FIXME: Missing documentation for initiator
  initiator: Initiator

  // FIXME: Missing documentation for publicKeyId
  publicKeyId: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for fee
  fee?: Amount
}

// FIXME: Missing documentation for GetPublicKeyResponse
export type GetPublicKeyResponse = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for publicKey
  publicKey: PublicKey

  // FIXME: Missing documentation for groupThreshold
  groupThreshold: number

  // FIXME: Missing documentation for groupSize
  groupSize: number

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for isEddsa
  isEddsa: boolean
}

// FIXME: Missing documentation for StartWalletConnectSessionOutput
export type StartWalletConnectSessionOutput = {
  // FIXME: Missing documentation for session
  session: WalletConnectSession
}

// FIXME: Missing documentation for WalletConnectClientMeta
export type WalletConnectClientMeta = {
  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for description
  description: string

  // FIXME: Missing documentation for icons
  icons: string[]
}

// FIXME: Missing documentation for WalletConnectSession
export type WalletConnectSession = {
  // FIXME: Missing documentation for accounts
  accounts: string[]

  // FIXME: Missing documentation for chainId
  chainId: IntegerPositiveStrict

  // FIXME: Missing documentation for bridge
  bridge: string

  // FIXME: Missing documentation for key
  key: string

  // FIXME: Missing documentation for clientId
  clientId: string

  // FIXME: Missing documentation for clientMeta
  clientMeta?: WalletConnectClientMeta

  // FIXME: Missing documentation for peerId
  peerId: string

  // FIXME: Missing documentation for peerMeta
  peerMeta?: WalletConnectClientMeta

  // FIXME: Missing documentation for handshakeId
  handshakeId: IntegerPositiveStrict

  // FIXME: Missing documentation for handshakeTopic
  handshakeTopic: string
}

// FIXME: Missing documentation for CreateSignatureInput
export type CreateSignatureInput = {
  // FIXME: Missing documentation for hash
  hash: string
}

// FIXME: Missing documentation for CreatePublicKeyInput
export type CreatePublicKeyInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for assetAccountId
  assetAccountId?: EntityId

  // FIXME: Missing documentation for groupSize
  groupSize?: number

  // FIXME: Missing documentation for groupThreshold
  groupThreshold?: number

  // FIXME: Missing documentation for isEddsa
  isEddsa: boolean

  // FIXME: Missing documentation for tags
  tags?: Tag[]
}

// FIXME: Missing documentation for CreateWalletTxInput
export type CreateWalletTxInput = {
  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for asset
  asset: string
}

// FIXME: Missing documentation for StartWalletConnectSessionInput
export type StartWalletConnectSessionInput = {
  // FIXME: Missing documentation for wcUri
  wcUri: string
}

// FIXME: Missing documentation for TransactionPayload
export type TransactionPayload = EvmGenericTx | SolanaTx

// FIXME: Missing documentation for PublicKeyStatus
export enum PublicKeyStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',
  // FIXME: Missing documentation for Disabled
  Disabled = 'Disabled',
  // FIXME: Missing documentation for Compromised
  Compromised = 'Compromised',
}

// FIXME: Missing documentation for SignatureStatus
export enum SignatureStatus {
  // FIXME: Missing documentation for Pending
  Pending = 'Pending',
  // FIXME: Missing documentation for Executed
  Executed = 'Executed',
  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for TransactionTemplateKind
export enum TransactionTemplateKind {
  // FIXME: Missing documentation for EvmGenericTx
  EvmGenericTx = 'EvmGenericTx',
  // FIXME: Missing documentation for CosmosIbcTransfer
  CosmosIbcTransfer = 'CosmosIbcTransfer',
  // FIXME: Missing documentation for SolanaTx
  SolanaTx = 'SolanaTx',
  // FIXME: Missing documentation for TronTx
  TronTx = 'TronTx',
  // FIXME: Missing documentation for TezosTx
  TezosTx = 'TezosTx',
}

// FIXME: Missing documentation for TransactionStatus
export enum TransactionStatus {
  // FIXME: Missing documentation for Initiated
  Initiated = 'Initiated',
  // FIXME: Missing documentation for PolicyAccepted
  PolicyAccepted = 'PolicyAccepted',
  // FIXME: Missing documentation for PolicyRejected
  PolicyRejected = 'PolicyRejected',
  // FIXME: Missing documentation for BroadcastPending
  BroadcastPending = 'BroadcastPending',
  // FIXME: Missing documentation for BroadcastRejected
  BroadcastRejected = 'BroadcastRejected',
  // FIXME: Missing documentation for Broadcasted
  Broadcasted = 'Broadcasted',
  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}
