import { CredentialSigner, KeyAssertion } from '@dfns/sdk'
import { toBase64Url } from '@dfns/sdk/utils'
import { KMSClient, KMSClientConfig, SignCommand, SigningAlgorithmSpec } from '@aws-sdk/client-kms'

export class AwsKmsKeySigner implements CredentialSigner<KeyAssertion> {
  private client = new KMSClient(this.options.kmsClientConfig)

  constructor(
    private options: {
      kmsClientConfig: KMSClientConfig
      kmsKeyConfig: {
        id: string
        algorithm: SigningAlgorithmSpec
      }
      credId: string
      appOrigin: string
      crossOrigin?: boolean
    }
  ) {}

  async sign(challenge: string): Promise<KeyAssertion> {
    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge,
        origin: this.options.appOrigin,
        crossOrigin: this.options.crossOrigin ?? false,
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
        credId: this.options.credId,
        clientData: toBase64Url(clientData),
        signature: toBase64Url(Buffer.from(response.Signature!)),
      },
    }
  }
}
