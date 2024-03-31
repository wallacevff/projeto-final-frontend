// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const user: User = {
    name: 'Wallace Vidal',
    picture: 'http://wallvff.com.br/perfil.jpg',
    birthdate: '1990-09-02',
    email: 'wallvff@gmail.com'
  };
  res.status(200).json(user);
}
