import { CredentialSigner, DfnsError, KeyAssertion } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { KMSClient, KMSClientConfig, SignCommand, SigningAlgorithmSpec } from '@aws-sdk/client-kms'

export class AwsKmsKeySigner implements CredentialSigner<KeyAssertion> {
  readonly useClientChallenge?: boolean

  private client = new KMSClient(this.options.kmsClientConfig)

  constructor(
    private options: {
      credId: string
      kmsClientConfig: KMSClientConfig
      kmsKeyConfig: {
        id: string
        algorithm: SigningAlgorithmSpec
      }
      useClientChallenge?: boolean
    }
  ) {
    this.useClientChallenge = options.useClientChallenge
  }

  async sign(options: { challenge: string; allowCredentials?: { key?: { id: string }[] } }): Promise<KeyAssertion> {
    const { credId } = this.options

    if (options.allowCredentials) {
      const allowedIds = options.allowCredentials.key?.map((cred) => cred.id) ?? []
      if (!allowedIds.includes(credId)) {
        throw new DfnsError(-1, `${credId} does not match allowed credentials: ${allowedIds.join(', ')}`)
      }
    }

    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge: options.challenge,
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
