import { UUID } from "crypto";
export default interface TurmaAluno{
    cursoId: UUID;
    turmaId: UUID;
    alunoId: number;
}