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

// Response for GetLatestClusterHealth

export type GetLatestClusterHealthSuccess = String

export type GetLatestClusterHealthError = {
  error: ForbiddenError
}

export type GetLatestClusterHealthResponse =
  | GetLatestClusterHealthSuccess
  | GetLatestClusterHealthError

// Response for ListClustersHealth

export type ListClustersHealthSuccess = String

export type ListClustersHealthError = {
  error: ForbiddenError
}

export type ListClustersHealthResponse =
  | ListClustersHealthSuccess
  | ListClustersHealthError

// Response for SetKeyMaxPresigs

export type SetKeyMaxPresigsSuccess = String

export type SetKeyMaxPresigsError = {
  error: ForbiddenError
}

export type SetKeyMaxPresigsResponse =
  | SetKeyMaxPresigsSuccess
  | SetKeyMaxPresigsError

// Response for TriggerClusterProvisioning

export type TriggerClusterProvisioningSuccess = String

export type TriggerClusterProvisioningError = {
  error: ForbiddenError
}

export type TriggerClusterProvisioningResponse =
  | TriggerClusterProvisioningSuccess
  | TriggerClusterProvisioningError
