import { getAsks } from "../../services/getAsks"

export default async function handler(req, res) {
  const stories = await getAsks(req.body)


  return res.status(200).json(stories)
}
