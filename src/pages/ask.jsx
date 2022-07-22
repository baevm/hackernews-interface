import React from 'react'
import { SWRConfig, unstable_serialize } from 'swr'
import NewsCards from '../components/NewsCards'
import { getAsks } from '../services/getAsks'

const ask = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards url='/getAsks' />
      </SWRConfig>
    </>
  )
}

export default ask

export const getServerSideProps = async () => {
  const stories = await getAsks()

  return {
    props: {
      fallback: {
        [unstable_serialize(['/getAsks', 10])]: stories,
      },
    },
  }
}
