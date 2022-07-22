import React from 'react'
import { SWRConfig } from 'swr'
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
        '/getAsks': stories,
      },
    },
  }
}
