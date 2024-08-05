import { UUID } from "crypto";

export default interface Aluno{
    id : UUID;
    nome : string;
    email : string;
}