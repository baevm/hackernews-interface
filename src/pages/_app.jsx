import { Box, Loader, MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const start = () => {
    
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Hacker News</title>
      </Head>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Layout>
          {loading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
              <Loader color='orange' />
            </Box>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </MantineProvider>
    </>
  )
}

export default MyApp
