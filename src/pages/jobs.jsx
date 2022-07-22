import React from 'react'
import { SWRConfig } from 'swr'
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
        '/getJobs': stories,
      },
    },
  }
}
