import { Usuario } from "@/types/domain/usuario/Usuario";
import { NextApiRequest, NextApiResponse } from "next";
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import Usuarios from "@/data/Usuarios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Usuario[]>,
) {
    const users: Usuario[] = Usuarios;
    res.status(200).json(users);
}