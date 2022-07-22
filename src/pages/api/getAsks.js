import { getAsks } from "../../services/getAsks"

export default async function handler(req, res) {
  const stories = await getAsks()


  return res.status(200).json(stories)
}
