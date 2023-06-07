import { DocumentSnapshot, EntityId, IsoDatetime } from '../Foundations'

// FIXME: Missing documentation for CallbackEvent
export type CallbackEvent = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for callbackSubscriptionId
  callbackSubscriptionId: EntityId

  // FIXME: Missing documentation for kind
  kind: CallbackEventKind

  // FIXME: Missing documentation for documentSnapshot
  documentSnapshot: DocumentSnapshot

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for status
  status: CallbackEventStatus
}

// FIXME: Missing documentation for CallbackSubscription
export type CallbackSubscription = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for eventKind
  eventKind: CallbackEventKind

  // FIXME: Missing documentation for url
  url: string

  // FIXME: Missing documentation for status
  status: CallbackSubscriptionStatus

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime
}

// FIXME: Missing documentation for CreateCallbackSubscriptionInput
export type CreateCallbackSubscriptionInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for eventKind
  eventKind: CallbackEventKind

  // FIXME: Missing documentation for url
  url: string
}

// FIXME: Missing documentation for CallbackEventKind
export enum CallbackEventKind {
  // FIXME: Missing documentation for PaymentInitiated
  PaymentInitiated = 'PaymentInitiated',
  // FIXME: Missing documentation for PaymentExecuted
  PaymentExecuted = 'PaymentExecuted',
  // FIXME: Missing documentation for PaymentConfirmed
  PaymentConfirmed = 'PaymentConfirmed',
  // FIXME: Missing documentation for PaymentReceived
  PaymentReceived = 'PaymentReceived',
  // FIXME: Missing documentation for TransactionBroadcasted
  TransactionBroadcasted = 'TransactionBroadcasted',
  // FIXME: Missing documentation for WalletCreated
  WalletCreated = 'WalletCreated',
  // FIXME: Missing documentation for PolicyActivated
  PolicyActivated = 'PolicyActivated',
}

// FIXME: Missing documentation for CallbackEventStatus
export enum CallbackEventStatus {
  // FIXME: Missing documentation for Sent
  Sent = 'Sent',
  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for CallbackSubscriptionStatus
export enum CallbackSubscriptionStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',
  // FIXME: Missing documentation for Disabled
  Disabled = 'Disabled',
  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}
