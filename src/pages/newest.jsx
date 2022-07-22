import React from 'react'
import NewsCards from '../components/NewsCards'
import { SWRConfig, unstable_serialize } from 'swr'
import { getNewest } from '../services/getNewest'

const newest = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards url='/getNewest' />
      </SWRConfig>
    </>
  )
}

export default newest

export const getServerSideProps = async () => {
  const stories = await getNewest()

  return {
    props: {
      fallback: {
        [unstable_serialize(['/getNewest', 10])]: stories,
      },
    },
  }
}
