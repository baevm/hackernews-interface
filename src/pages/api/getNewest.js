import { getNewest } from "../../services/getNewest"

export default async function handler(req, res) {
  const stories = await getNewest(req.body)

  return res.status(200).json(stories)
}
