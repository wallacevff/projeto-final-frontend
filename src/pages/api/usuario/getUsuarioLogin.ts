import { Usuario } from "@/types/domain/usuario/Usuario";
import { NextApiRequest, NextApiResponse } from "next";
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import Usuarios from "@/data/Usuarios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Usuario | null | undefined>,
) {
    if (req.method === "POST") {
        const body = req.body;
        const { login, password } = JSON.parse(body)
        const user: Usuario | null | undefined = Usuarios.find(
            u => u.nome === login && u.senha === password
        );
        res.status(200).json(user);
    }
}