import React from 'react'
import NewsCards from '../components/NewsCards'
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { getBest } from '../services/getBest'

const best = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards url='/getBest' />
      </SWRConfig>
    </>
  )
}

export default best

export const getServerSideProps = async () => {
  const stories = await getBest()

  return {
    props: {
      fallback: {
        [unstable_serialize(['/getBest', 10])]: stories,
      },
    },
  }
}
