import { Link } from 'react-router-dom'
import { Layout } from '../components/layout'

import '../globals.css'

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <Link to="/import">Import / Export new Wallet</Link>
        <Link to="/export">Export existing Wallet</Link>
      </div>
    </Layout>
  )
}
