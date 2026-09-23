import { CredentialSigner, DfnsError, KeyAssertion, UserActionChallenge } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { KMSClient, KMSClientConfig, SignCommand, SigningAlgorithmSpec } from '@aws-sdk/client-kms'

export class AwsKmsKeySigner implements CredentialSigner<KeyAssertion> {
  private client = new KMSClient(this.options.kmsClientConfig)

  constructor(
    private options: {
      credId: string
      kmsClientConfig: KMSClientConfig
      kmsKeyConfig: {
        id: string
        algorithm: SigningAlgorithmSpec
      }
    }
  ) {}

  async sign(challenge: UserActionChallenge): Promise<KeyAssertion> {
    const { credId } = this.options
    const allowedCredId = challenge.allowCredentials.key.map((cred) => cred.id)
    if (!allowedCredId.includes(credId)) {
      throw new DfnsError(-1, `${credId} does not match allowed credentials: ${allowedCredId}`)
    }

    return this.signChallenge(challenge.challenge)
  }

  async signFastAuth(challenge: string): Promise<KeyAssertion> {
    // The verifier accepts DER ECDSA and PKCS#1 signatures, without RSA-PSS parameters.
    const algorithms: Partial<Record<SigningAlgorithmSpec, string>> = {
      ECDSA_SHA_256: 'SHA256',
      ECDSA_SHA_384: 'SHA384',
      ECDSA_SHA_512: 'SHA512',
      RSASSA_PKCS1_V1_5_SHA_256: 'SHA256',
      RSASSA_PKCS1_V1_5_SHA_384: 'SHA384',
      RSASSA_PKCS1_V1_5_SHA_512: 'SHA512',
    }
    const algorithm = algorithms[this.options.kmsKeyConfig.algorithm]
    if (!algorithm) throw new DfnsError(-1, 'This KMS signing algorithm is not supported by Fast Auth.')
    const assertion = await this.signChallenge(challenge)
    return { ...assertion, credentialAssertion: { ...assertion.credentialAssertion, algorithm } }
  }

  private async signChallenge(challenge: string): Promise<KeyAssertion> {
    const { credId } = this.options
    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge,
      })
    )

    const command = new SignCommand({
      KeyId: this.options.kmsKeyConfig.id,
      Message: clientData,
      MessageType: 'RAW',
      SigningAlgorithm: this.options.kmsKeyConfig.algorithm,
    })

    const response = await this.client.send(command)

    return {
      kind: 'Key',
      credentialAssertion: {
        credId,
        clientData: toBase64Url(clientData),
        signature: toBase64Url(Buffer.from(response.Signature!)),
      },
    }
  }
}
