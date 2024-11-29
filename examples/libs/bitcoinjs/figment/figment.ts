import axios, { type AxiosInstance } from 'axios'
import { ZodSchema, z } from 'zod'

export class Figment {
  private client: AxiosInstance
  constructor(apiKey: string) {

    this.client = axios.create({
      baseURL: 'https://api.figment.io/',
      headers: {
        ['Accept']: 'application/json',
        ['Content-Type']: 'application/json',
        ['x-api-key']: apiKey
      },
      validateStatus: () => true,
    })
  }

  private async query<TResp>(
    method: 'POST' | 'PUT' | 'GET',
    uri: string,
    payload: any,
    schema: ZodSchema<TResp>
  ): Promise<TResp> {


    let response

    switch (method) {
      case 'POST':
        response = await this.client.post(uri, payload)
        break;
      case 'PUT':
        response = await this.client.put(uri, payload)
        break;
      case 'GET':
        response = await this.client.get(uri)
        break;
    }

    const parsedData = schema.safeParse(response.data)

    console.log(response.data)

    if (response.data.error) {
      console.log(response.data.error.details[0])
    }

    if (!parsedData.success) {
      throw Error('Response from figment could not be parsed')
    }

    return parsedData.data
  }

  public async babylonStakes(payload: BabylonStakingTransactionRequest): Promise<z.infer<typeof babylonStakingTransactionResponseSchema>> {
    return this.query('POST', `/babylon/stakes`, payload, babylonStakingTransactionResponseSchema)
  }

  public async updateBabylonStaking(stake_id: string, network: string, tx_hash: string): Promise<z.infer<typeof updateBabylonStakingResponseSchema>> {
    return this.query('PUT', `/babylon/stakes/${stake_id}`, { network, tx_hash }, updateBabylonStakingResponseSchema)
  }

  public async babylonUnbondTransaction(stake_id: string, network: string): Promise<z.infer<typeof babylonUnbondTransactionResponseSchema>> {
    return this.query('GET', `/babylon/stakes/${stake_id}/unbond_tx?network=${network}`, {}, babylonUnbondTransactionResponseSchema)
  }

  public async babylonBroadcastUnbondTransaction(stake_id: string, network: string, signed_tx: string): Promise<z.infer<typeof babylonBroadcastUnbondTransactionSchema>> {
    return this.query('POST', `/babylon/stakes/${stake_id}/unbond_tx`, { network, signed_tx }, babylonBroadcastUnbondTransactionSchema)
  }
}

export type BabylonStakingTransactionRequest = z.infer<typeof babylonStakingTransactionRequestSchema>

const babylonStakingTransactionRequestSchema = z.object({
  network: z.string(),
  amount: z.number().int().positive(),
  pubkey: z.string(),
  address: z.string(),
  duration: z.number().int().positive(),
  change_address: z.string(),
  taproot_pubkey: z.string().optional(),
  utxos: z.array(z.object({
    txid: z.string(),
    vout: z.number().int().positive(),
    value: z.number().int().positive(),
    script_pubkey: z.string()
  }))
})

const babylonStakingTransactionResponseSchema = z.object({
  data: z.object({
    id: z.string(),
    unsigned_transaction_serialized: z.string(),
    covenant_pubkeys: z.array(z.string()),
    covenant_threshold: z.number(),
    finality_providers: z.array(z.string()),
    min_unbonding_time: z.number(),
    lock_height: z.number(),
    fee_rate: z.number(),
    magic_bytes: z.string()

  })
})

const babylonUnbondTransactionResponseSchema = z.object({
  data: z.object({
    id: z.string(),
    unsigned_transaction_serialized: z.string()
  })
})

const updateBabylonStakingResponseSchema = z.object({})

const babylonBroadcastUnbondTransactionSchema = z.object({})
