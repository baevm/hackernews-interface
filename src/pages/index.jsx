import { SWRConfig } from 'swr'
import NewsCards from '../components/NewsCards'
import { getTopStories } from '../services/getTopStories'

export default function Home({ fallback }) {

  return (
    <>
      <SWRConfig value={{ fallback }}>
        <NewsCards url='/getTopStories' />
      </SWRConfig>
    </>
  )
}

export const getServerSideProps = async () => {
  const stories = await getTopStories()

  return {
    props: {
      fallback: {
        '/getTopStories': stories,
      },
    },
  }
}
