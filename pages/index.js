import Head from 'next/head'
import Home from '@/containers/Home'

const Dashboard = () => {
    return (
      <>
        <Head>
          <title>Your TODO Dashboard</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Home></Home>
      </>
    );
}

export default Dashboard
