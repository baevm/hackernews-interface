export const getUser = async (id) => {
 
  const data = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`)
  const user = await data.json()

  return user
}
