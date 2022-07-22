import React from 'react'
import { SWRConfig, unstable_serialize } from 'swr'
import NewsCards from '../components/NewsCards'
import { getJobs } from '../services/getJobs'

const jobs = ({ fallback }) => {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards url='/getJobs' type='jobs' />
      </SWRConfig>
    </>
  )
}

export default jobs

export const getServerSideProps = async () => {
  const stories = await getJobs()

  return {
    props: {
      fallback: {
        [unstable_serialize(['/getJobs', 10])]: stories,
      },
    },
  }
}
