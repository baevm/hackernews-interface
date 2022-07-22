import React from 'react'
import { SWRConfig } from 'swr'
import NewsCards from '../components/NewsCards'
import { getShows } from '../services/getShows'

const show = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards url='/getShows' />
      </SWRConfig>
    </>
  )
}

export default show

export const getServerSideProps = async () => {
  const stories = await getShows()

  return {
    props: {
      fallback: {
        '/getShows': stories,
      },
    },
  }
}
