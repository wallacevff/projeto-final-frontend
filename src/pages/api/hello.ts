// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import { Usuario } from "@/types/domain/usuario/Usuario";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Usuario>,
) {
  const user: Usuario = {
    id: 1,
    nome: 'Wallace Vidal',
    senha: 'senha123',
    imagem: 'http://wallvff.com.br/perfil.jpg',
    email: 'wallvff@gmail.com',
    TipoUsuario: TipoUsuario.PROFESSOR,
    
  };
  res.status(200).json(user);
}
