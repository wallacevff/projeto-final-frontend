// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cursos from "@/data/Cursos";
import Curso from "@/types/domain/curso/Curso";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Curso[]>,
) {
  const cursos: Curso[] = Cursos
  res.status(200).json(cursos);
}
