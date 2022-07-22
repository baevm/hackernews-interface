import { getShows } from '../../services/getShows'

export default async function handler(req, res) {
  const stories = await getShows()

  return res.status(200).json(stories)
}
