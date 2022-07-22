import useSWR, { SWRConfig } from 'swr'
import NewsCards from '../components/NewsCards'
import fetcher from '../services/fetcher'
import { getTopStories } from '../services/getTopStories'

export default function Home({ fallback }) {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards />
      </SWRConfig>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const stories = await getTopStories()

  return {
    props: {
      fallback: {
        '/getTopStories': stories,
      },
    },
  }
}
