import { EntityId } from '../Foundations'

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/signers' instead
 */
export type Cluster = {
  // FIXME: Missing documentation for clusterId
  clusterId: EntityId

  // FIXME: Missing documentation for signers
  signers: Signer[]
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/signers' instead
 */
export type Signer = {
  // FIXME: Missing documentation for signerId
  signerId: string

  // FIXME: Missing documentation for encryptionKey
  encryptionKey: string
}

/**
 * @deprecated import equivalent type from '@dfns/sdk/types/signers' instead
 */
export type ClusterList = {
  // FIXME: Missing documentation for clusters
  clusters: Cluster[]
}
