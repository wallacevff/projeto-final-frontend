// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cursos from "@/data/Cursos";
import TurmasAlunos from "@/data/TurmasAlunos";
import Curso from "@/types/domain/curso/Curso";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curso | null | undefined>,
) {
  const curso: Curso | null | undefined = Cursos.find((cursoFind) => cursoFind.id === req.query.id);
  if(req.query.alunoId){
    // Filtrar cursos que possuem turmas com alunoId
    const alunoId = parseInt(req.query.alunoId as string);
    const TurmaAluno = TurmasAlunos.filter(ta => ta.alunoId === alunoId && req.query.id === ta.cursoId);
    
  }
  
  res.status(200).json(curso);
}
