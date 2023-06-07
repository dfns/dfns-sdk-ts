import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { CallbackEvent, CallbackSubscription } from './types'

// Response for CreateCallbackSubscription

export type CreateCallbackSubscriptionSuccess = CallbackSubscription

export type CreateCallbackSubscriptionError = {
  error:
    | BadRequestError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateCallbackSubscriptionResponse =
  | CreateCallbackSubscriptionSuccess
  | CreateCallbackSubscriptionError

// Response for GetCallbackSubscriptionById

export type GetCallbackSubscriptionByIdSuccess = CallbackSubscription

export type GetCallbackSubscriptionByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetCallbackSubscriptionByIdResponse =
  | GetCallbackSubscriptionByIdSuccess
  | GetCallbackSubscriptionByIdError

// Response for ListCallbackSubscriptions

export type ListCallbackSubscriptionsSuccess = {
  items: CallbackSubscription[]
}

export type ListCallbackSubscriptionsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListCallbackSubscriptionsResponse =
  | ListCallbackSubscriptionsSuccess
  | ListCallbackSubscriptionsError

// Response for ArchiveCallbackSubscription

export type ArchiveCallbackSubscriptionSuccess = CallbackSubscription

export type ArchiveCallbackSubscriptionError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ArchiveCallbackSubscriptionResponse =
  | ArchiveCallbackSubscriptionSuccess
  | ArchiveCallbackSubscriptionError

// Response for GetCallbackEventById

export type GetCallbackEventByIdSuccess = CallbackEvent

export type GetCallbackEventByIdError = {
  error:
    | EntityNotFoundError
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetCallbackEventByIdResponse =
  | GetCallbackEventByIdSuccess
  | GetCallbackEventByIdError

// Response for ListCallbackEvents

export type ListCallbackEventsSuccess = {
  items: CallbackEvent[]
}

export type ListCallbackEventsError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListCallbackEventsResponse =
  | ListCallbackEventsSuccess
  | ListCallbackEventsError
