
import Cursos from "@/data/Cursos";
import Usuarios from "@/data/Usuarios";
import Curso from "@/types/domain/curso/Curso";
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curso[] | {}>,
) {
  const professorId = parseInt(req.query.id as string);
  const usuario = Usuarios.filter(u => u.id === professorId)[0];
  if (!usuario) {
    res.status(404).json({ error: "Professor não encontrado" });
    return;
  }
  if (usuario.tipousuario!== TipoUsuario.PROFESSOR) {
    res.status(403).json({ error: "Acesso não permitido" });
    return;
  }
  const cursos: Curso[] = Cursos.filter(c => c.professorId === professorId);
  res.status(200).json(cursos);
}
