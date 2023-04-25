import { element } from "@/prodict"

export default function handler(req, res) {
  res.status(200).json(element)
}