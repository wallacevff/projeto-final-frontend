import Turma from "./Turma";

export default interface Tarefa{
    id: UUID;
    titulo: string;
    numero: number;
    turmaId: UUID;
    turma: Turma;
}