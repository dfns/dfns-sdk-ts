import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import morgan from 'morgan'

import { loginComplete, loginInit } from './handlers/login'
import { registerComplete, registerInit } from './handlers/register'

dotenv.config()

const app: Express = express()
app.use(morgan('combined'))
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())

app.get('/', (_: Request, res: Response) => {
  res.send('Dfns SDK Tutorial Server')
})

app.post('/login/init', asyncHandler(loginInit))
app.post('/login/complete', asyncHandler(loginComplete))

app.post('/register/init', asyncHandler(registerInit))
app.post('/register/complete', asyncHandler(registerComplete))

const port = process.env.EXPRESS_PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
