import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";
import { NextApiRequest, NextApiResponse } from "next";
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import Usuarios from "@/data/Usuarios";
import { generateToken } from "@/utils/jwt";
import map from "@/utils/mapper";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<string | null | undefined>,
) {
    if (req.method === "POST") {
        const body = req.body;
        // const { login, password } = JSON.parse(body)
        const user: Usuario | null | undefined = Usuarios.find(
            u => u.email === body.login && u.senha === body.password
        );
        if (!user) {
            res.status(200).json(null);
            return;
        }
        res.status(200).json(generateToken(map.TO<UsuarioDto>(user)));
    }
}