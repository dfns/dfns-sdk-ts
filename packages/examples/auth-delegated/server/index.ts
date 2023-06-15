import { DfnsApiClient } from '@dfns/sdk'
import { AsymmetricKeySigner } from '@dfns/sdk-key-signer'
import { DfnsDelegatedApiClient } from '@dfns/sdk/dfnsDelegatedApiClient'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { randomUUID } from 'crypto'
import dotenv from 'dotenv'
import express, { Express, NextFunction, Request, Response } from 'express'

dotenv.config()

const apiClient = () => {
  const signer = new AsymmetricKeySigner({
    privateKey: process.env.DFNS_PRIVATE_KEY!,
    credId: process.env.DFNS_CRED_ID!,
    appOrigin: process.env.DFNS_APP_ORIGIN!,
  })

  return new DfnsApiClient({
    appId: process.env.DFNS_APP_ID!,
    accessToken: process.env.DFNS_ACCESS_TOKEN!,
    baseUrl: process.env.DFNS_API_URL!,
    signer,
  })
}

const delegatedClient = (token: string) => {
  return new DfnsDelegatedApiClient({
    appId: process.env.DFNS_APP_ID!,
    accessToken: token,
    baseUrl: process.env.DFNS_API_URL!,
  })
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies.DFNS_ACCESS_TOKEN) {
    next()
  } else {
    res.status(401).json({
      error: 'not authenticated',
    })
  }
}

const app: Express = express()
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('DFNS delegated auth example server')
})

app.post('/login', async (req: Request, res: Response) => {
  const login = await apiClient().auth.createDelegatedUserLogin({
    body: { username: 'daniel.jin+local1@dfns.co' },
  })

  res.cookie('DFNS_ACCESS_TOKEN', login.token, { maxAge: 900000, httpOnly: true }).json({ username: req.body.username })
})

app.use(auth)

app.get('/wallets/list', async (req: Request, res: Response) => {
  const wallets = await delegatedClient(req.cookies.DFNS_ACCESS_TOKEN).wallets.listWallets({})
  res.json(wallets)
})

app.post('/wallets/new/init', async (req: Request, res: Response) => {
  const body = {
    network: req.body.network,
    externalId: randomUUID(),
  }
  const challenge = await delegatedClient(req.cookies.DFNS_ACCESS_TOKEN).wallets.createWalletInit({ body })
  res.json({
    requestBody: body,
    challenge,
  })
})

app.post('/wallets/new/complete', async (req: Request, res: Response) => {
  const { requestBody, signedChallenge } = req.body
  await delegatedClient(req.cookies.DFNS_ACCESS_TOKEN).wallets.createWalletComplete(
    { body: requestBody },
    signedChallenge
  )
  res.status(204).end()
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
