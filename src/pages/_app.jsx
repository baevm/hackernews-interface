import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hacker News</title>
      </Head>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}

export default MyApp
