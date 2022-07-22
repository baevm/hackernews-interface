import { getBest } from '../../services/getBest'


export default async function handler(req, res) {
  const stories = await getBest(req.body)

  return res.status(200).json(stories)
}
