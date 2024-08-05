import { UUID } from "crypto";

export default interface Turma{
    id: UUID;
    nome: string;
    numero: number;
    cursoId: UUID;
    qtdAlunosPermitidos: number;
    curso: Curso;
    alunos?: Aluno[];
    tarefas?: Tarefa[];
}