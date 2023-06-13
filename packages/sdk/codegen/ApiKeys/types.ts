import * as ApiKeys from '../datamodel/ApiKeys'

export type CreateApiKeyRequest = {
  body: ApiKeys.CreateApiKeyInput
}

export type CreateApiKeyResponse = ApiKeys.ApiKeyRecordWithToken

export type ListApiKeysResponse = { items: ApiKeys.ApiKeyRecord[] }

export type RevokeApiKeyRequest = {
  apiKeyId: string
}

export type RevokeApiKeyResponse = ApiKeys.ApiKeyRecord

export type GetApiKeyByIdRequest = {
  apiKeyId: string
}

export type GetApiKeyByIdResponse = ApiKeys.ApiKeyRecord
