import { SWRConfig, unstable_serialize } from 'swr'
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

// unstable_serialize: https://github.com/vercel/swr/discussions/1447#discussioncomment-1309529
export const getServerSideProps = async () => {
  const stories = await getTopStories()

  return {
    props: {
      fallback: {
        [unstable_serialize(['/getTopStories', 10])]: stories,
      },
    },
  }
}
