import fetcher from '../../services/fetcher'
import { getTopStories } from '../../services/getTopStories'

export default async function handler(req, res) {
  const stories = await getTopStories(req.body)

  return res.status(200).json(stories)
}
