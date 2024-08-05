// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cursos from "@/data/Cursos";
import Curso from "@/types/domain/curso/Curso";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curso | null | undefined>,
) {
  const curso: Curso | null | undefined = Cursos.find((cursoFind) => cursoFind.id === req.query.id);
  res.status(200).json(curso);
}
