import { element } from "@/prodict"

export default function handler(req, res) {
  let id = req.query.id ;
  let post = element.find(p => p.id == id)
  if(post){
    res.status(200).json(post)
  }
}