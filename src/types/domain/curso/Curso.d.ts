import { UUID } from "crypto";
import CursoCategoria from "./CursoCategoria";
export default interface Curso {
    id: UUID;
    nome: string;
    categoriaId: UUID;
    cursocategoria : CursoCategoria;
    turmas : Turma[];
    // professorId?: UUID;
    professorId?: number;
}