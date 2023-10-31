import { Fido2Attestation, RecoveryKeyAttestation } from '@dfns/sdk'
import { base64url } from './base64url'
import { RecoverUserInput } from '@dfns/sdk/codegen/datamodel/Auth'

export type KeyClientData = {
  type: 'key.create'
  challenge: string
  origin: string
  crossOrigin: boolean
}

export type NewUserCredentials = {
  recoveryFactor: {
    kind: 'RecoveryKey'
    credentialId: string
    signature: {
      clientData: ArrayBuffer
      attestationData: ArrayBuffer
    },
    encryptedPrivateKey?: string
  }
}

type NewCredentialRegistration = {
  firstFactorCredential: Fido2Attestation
  recoveryCredential: RecoveryKeyAttestation
}

export const createRecoveryCredential = async (
  clientData: KeyClientData,
  username: string
) : Promise<{ credential: RecoveryKeyAttestation, recoveryKey: { secret: string, credentialId: string } }> => {
  return new Promise((resolve, reject) => {
    const serviceWorker = new Worker('/js/worker.js')

    serviceWorker.addEventListener('message', (event) => {
      switch (event.data.type)
      {
      case 'encryptedPrivateKeyAndPublicKey': {
        const { encryptedPrivateKey, attestationData, recoveryKey, credentialId } = event.data
        const recoveryKeyCredential: RecoveryKeyAttestation = {
          credentialKind: 'RecoveryKey',
          credentialInfo: {
            credId: credentialId,
            attestationData: base64url(attestationData),
            clientData: base64url(JSON.stringify(clientData)),
          },
          encryptedPrivateKey: encryptedPrivateKey,
        }
        const newRecoveryKey = {
          secret: recoveryKey,
          credentialId,
        }
        resolve({
          credential: recoveryKeyCredential,
          recoveryKey: newRecoveryKey,
        })
        break
      }
      case 'error': {
        const { error } = event.data
        reject(error)
        break
      }
      }
    })

    serviceWorker.postMessage({
      type: 'generateEncryptedPrivateKeyAndPublicKey',
      username: username,
      clientData: JSON.stringify(clientData),
    })
  })
}

export const validateRecoveryKey = async (
  username: string,
  existingRecoveryKey: {
    recoveryKey: string
    credentialId: string
    encryptedKey: string
  }
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const serviceWorker = new Worker('/js/worker.js')

    serviceWorker.addEventListener('message', (event) => {
      switch (event.data.type) {
      case 'recoveryKeyIsValid': {
        resolve()
        break
      }
      case 'error': {
        const { error } = event.data
        reject(error)
        break
      }
      }
    })

    serviceWorker.postMessage({
      type: 'validateRecoveryKey',
      username: username,
      recoveryKey: existingRecoveryKey.recoveryKey,
      encryptedPrivateKey: existingRecoveryKey.encryptedKey,
      credentialId: existingRecoveryKey.credentialId,
    })
  })
}

export const signRecoveryCredentials = async (
  username: string,
  existingRecoveryKey: {
    recoveryKey: string
    credentialId: string
    encryptedKey: string
  },
  newCredentials: NewCredentialRegistration
): Promise<RecoverUserInput> => {
  return new Promise((resolve, reject) => {
    const recoveryClientData = JSON.stringify({
      type: 'key.get',
      challenge: base64url(JSON.stringify(newCredentials)),
      origin: window.location.origin,
      crossOrigin: false,
    })

    const serviceWorker = new Worker('/js/worker.js')

    serviceWorker.addEventListener('message', (event) => {
      switch (event.data.type) {
      case 'signature': {
        const { signature } = event.data

        resolve({
          kind: 'RecoveryKey',
          credentialAssertion: {
            credId: existingRecoveryKey.credentialId,
            clientData: base64url(recoveryClientData),
            signature: signature,
          }
        } as RecoverUserInput)
        break
      }
      case 'error': {
        const { error } = event.data
        reject(error)
        break
      }
      }
    })

    serviceWorker.postMessage({
      type: 'generateSignature',
      username: username,
      message: recoveryClientData,
      recoveryKey: existingRecoveryKey.recoveryKey,
      encryptedPrivateKey: existingRecoveryKey.encryptedKey,
      credentialId: existingRecoveryKey.credentialId,
    })
  })
}
