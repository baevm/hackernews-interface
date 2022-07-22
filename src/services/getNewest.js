export const getNewest = async () => {
  const data = await fetch(
    'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=10&orderBy="$key"'
  )
  const dataJson = await data.json()
  const stories = await Promise.all(
    dataJson.map((item) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(async (res) => await res.json())
    )
  )

  return stories
}
