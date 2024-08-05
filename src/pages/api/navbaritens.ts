import { Usuario } from "@/types/domain/usuario/Usuario";
import { NextApiRequest, NextApiResponse } from "next";
import NavbarItens from "@/data/NavbarItens";
import Usuarios from "@/data/Usuarios";
import { NavbarItem } from "@/types/navbar/NavBarItem";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<NavbarItem[]>,
) {
    const navbarItens: NavbarItem[] = NavbarItens;
    res.status(200).json(navbarItens);
}