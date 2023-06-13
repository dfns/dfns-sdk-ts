import {
  BadRequestError,
  EntityNotFoundError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { ApiKeyActionNotAllowed } from './errors'
import { ApiKeyRecord, ApiKeyRecordWithToken } from './types'

// Response for CreateApiKey

export type CreateApiKeySuccess = ApiKeyRecordWithToken

export type CreateApiKeyError = {
  error:
    | ApiKeyActionNotAllowed
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type CreateApiKeyResponse = CreateApiKeySuccess | CreateApiKeyError

// Response for ListApiKeys

export type ListApiKeysSuccess = {
  items: ApiKeyRecord[]
}

export type ListApiKeysError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type ListApiKeysResponse = ListApiKeysSuccess | ListApiKeysError

// Response for RevokeApiKey

export type RevokeApiKeySuccess = ApiKeyRecord

export type RevokeApiKeyError = {
  error:
    | ApiKeyActionNotAllowed
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type RevokeApiKeyResponse = RevokeApiKeySuccess | RevokeApiKeyError

// Response for GetApiKeyById

export type GetApiKeyByIdSuccess = ApiKeyRecord

export type GetApiKeyByIdError = {
  error:
    | UnauthorizedError
    | ForbiddenError
    | BadRequestError
    | EntityNotFoundError
}

export type GetApiKeyByIdResponse = GetApiKeyByIdSuccess | GetApiKeyByIdError
