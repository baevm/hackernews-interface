import fetcher from '../../services/fetcher'

export default async function handler(req, res) {
  const data = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"'
  )
  const dataJson = await data.json()
  const stories = await Promise.all(
    dataJson.map((item) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(async (res) => await res.json())
    )
  )

  return res.status(200).json(stories)
}
