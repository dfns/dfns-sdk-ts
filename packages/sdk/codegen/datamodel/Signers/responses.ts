import {
  BadRequestError,
  ForbiddenError,
  UnauthorizedError,
} from '../Foundations'
import { ClusterList } from './types'

// Response for ListSigners

export type ListSignersSuccess = ClusterList

export type ListSignersError = {
  error: ForbiddenError | UnauthorizedError | BadRequestError
}

export type ListSignersResponse = ListSignersSuccess | ListSignersError
