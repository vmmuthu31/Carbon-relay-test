import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from './Components/Dashboard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>C-Dash</title>
      </Head>
      <Dashboard />

      
    </div>
  )
}

export default Home
