// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { TipoUsuario } from "@/types/dataTypes/TipoUsuario";
import { User } from "@/types/dataTypes/User";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  const user: User = {
    id: 1,
    nome: 'Wallace Vidal',
    senha: 'senha123',
    imagem: 'http://wallvff.com.br/perfil.jpg',
    email: 'wallvff@gmail.com',
    TipoUsuario: TipoUsuario.PROFESSOR,
    
  };
  res.status(200).json(user);
}
