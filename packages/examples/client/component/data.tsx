'use client'

import { useEffect, useState } from 'react'
import { dfnsApi } from '@/api'

export default function Data() {
  const [data, setData] = useState<any | undefined>(undefined)

  useEffect(() => {
    dfnsApi()
      .wallets.listTransactions({ walletId: 'wa-39abb-e9kpk-87p9t6l2pbbdjb8o' })
      .then((data) => {
        setData(data)
      })
  })

  return <code>{data}</code>
}
