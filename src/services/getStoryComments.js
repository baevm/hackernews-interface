export const getStoryComments = async (storyId) => {
  const data = await fetch(`http://hn.algolia.com/api/v1/items/${storyId}?hitsPerPage=50`)
  const comments = await data.json()
  return comments
}
