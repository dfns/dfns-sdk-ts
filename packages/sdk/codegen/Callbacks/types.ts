import * as Callbacks from '../datamodel/Callbacks'

export type CreateCallbackSubscriptionRequest = {
  body: Callbacks.CreateCallbackSubscriptionInput
}

export type CreateCallbackSubscriptionResponse = Callbacks.CallbackSubscription

export type GetCallbackSubscriptionByIdRequest = {
  callbackSubscriptionId: string
}

export type GetCallbackSubscriptionByIdResponse = Callbacks.CallbackSubscription

export type ListCallbackSubscriptionsResponse = {
  items: Callbacks.CallbackSubscription[]
}

export type ArchiveCallbackSubscriptionRequest = {
  callbackSubscriptionId: string
}

export type ArchiveCallbackSubscriptionResponse = Callbacks.CallbackSubscription

export type GetCallbackEventByIdRequest = {
  callbackEventId: string
}

export type GetCallbackEventByIdResponse = Callbacks.CallbackEvent

export type ListCallbackEventsResponse = { items: Callbacks.CallbackEvent[] }
