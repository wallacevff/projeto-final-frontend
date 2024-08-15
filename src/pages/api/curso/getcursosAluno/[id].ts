
import Cursos from "@/data/Cursos";
import TurmasAlunos from "@/data/TurmasAlunos";
import Usuarios from "@/data/Usuarios";
import TurmaAluno from "@/types/domain/aluno/TurmaAluno";
import Curso from "@/types/domain/curso/Curso";
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curso[] | {}>,
) {
  const alunoId = parseInt(req.query.id as string);
  const usuario = Usuarios.filter(u => u.id === alunoId)[0];
  if (!usuario) {
    res.status(404).json({ error: "aluno não encontrado" });
    return;
  }
  if (usuario.tipousuario!== TipoUsuario.ALUNO) {
    res.status(403).json({ error: "Acesso não permitido" });
    return;
  }
  const turmasAluno: TurmaAluno[] = TurmasAlunos.filter(ta => ta.alunoId === alunoId);
  const cursos: Curso[] = Cursos.filter(c => turmasAluno.some(t => t.cursoId === c.id));
  cursos.forEach(c => {c.turmas = c.turmas.filter(t => turmasAluno.some(ta => ta.turmaId === t.id && c.id == ta.cursoId));});
  res.status(200).json(cursos);
}
