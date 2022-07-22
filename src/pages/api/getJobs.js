import { getJobs } from '../../services/getJobs'

export default async function handler(req, res) {
  const stories = await getJobs()

  return res.status(200).json(stories)
}
