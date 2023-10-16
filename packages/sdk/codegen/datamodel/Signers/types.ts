import { EntityId } from '../Foundations'

// FIXME: Missing documentation for Cluster
export type Cluster = {
  // FIXME: Missing documentation for clusterId
  clusterId: EntityId

  // FIXME: Missing documentation for signers
  signers: Signer[]
}

// FIXME: Missing documentation for Signer
export type Signer = {
  // FIXME: Missing documentation for signerId
  signerId: string

  // FIXME: Missing documentation for encryptionKey
  encryptionKey: string
}

// FIXME: Missing documentation for ClusterList
export type ClusterList = {
  // FIXME: Missing documentation for clusters
  clusters: Cluster[]
}
