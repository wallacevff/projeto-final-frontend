import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";
import { NextApiRequest, NextApiResponse } from "next";
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import Usuarios from "@/data/Usuarios";
import { decodeToken, generateToken } from "@/utils/jwt";
import map from "@/utils/mapper";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UsuarioDto | null | undefined>,
) {
    if (req.method === "GET") {
        const usuarioDecoded = decodeToken((req.query.token!) as unknown as string);
        const usuario = Usuarios.filter(u => u.id === usuarioDecoded?.id)[0];
        // console.log(usuario);
        res.status(200).json(map.TO<UsuarioDto>(usuario));
    }
}