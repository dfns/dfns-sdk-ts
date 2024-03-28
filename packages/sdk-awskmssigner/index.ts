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

    const clientData = Buffer.from(
      JSON.stringify({
        type: 'key.get',
        challenge: challenge.challenge,
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
