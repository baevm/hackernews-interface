export const getShows = async (portion = 10) => {
  const data = await fetch(
    `https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty&limitToFirst=${portion}&orderBy="$key"`
  )
  const dataJson = await data.json()
  const stories = await Promise.all(
    dataJson.map((item) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(async (res) => await res.json())
    )
  )

  return stories
}
