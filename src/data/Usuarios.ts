import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import { Usuario } from "@/types/domain/usuario/Usuario";

const Usuarios: Usuario[] = [
    {
        id: 1,
        nome: "Wallace Vidal",
        email: "wallvff@gmail.com",
        senha: "senha123",
        imagem: "http://wallvff.com.br/perfil.jpg",
        TipoUsuario: TipoUsuario.PROFESSOR
    },
    {
        id: 2,
        nome: "José Silva",
        email: "jsilva@gmail.com",
        senha: "senha456",
        imagem: "http://josésilva.com.br/foto.jpg",
        TipoUsuario: TipoUsuario.ALUNO
    },
];
export default Usuarios;