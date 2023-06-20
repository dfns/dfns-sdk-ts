import { BadRequestError, ForbiddenError } from '../Foundations'

// Response for ReplayBlock

export type ReplayBlockSuccess = String

export type ReplayBlockError = {
  error: ForbiddenError | BadRequestError
}

export type ReplayBlockResponse = ReplayBlockSuccess | ReplayBlockError
