// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {

};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const body = req.body;
    const {login, password} = JSON.parse(body)
    if (login == "admin" && password == "@dmin") {
      res.status(200).json(true);
      return;
    }
    res.status(401).send(false);
    return;

  }
  res.status(401).json({ message: "Method not allowed!" });
  return;

}
