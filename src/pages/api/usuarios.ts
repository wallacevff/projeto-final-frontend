import { User } from "@/types/dataTypes/User";
import { NextApiRequest, NextApiResponse } from "next";
import { TipoUsuario } from "@/types/dataTypes/TipoUsuario";
import Usuarios from "@/data/Usuarios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>,
) {
    const users: User[] = Usuarios;
    res.status(200).json(users);
}