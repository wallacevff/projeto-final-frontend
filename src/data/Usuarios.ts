import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import { Usuario } from "@/types/domain/usuario/Usuario";

const Usuarios: Usuario[] = [
    {
        id: 1,
        nome: "Wallace Vidal",
        email: "wallvff",
        senha: "123",
        imagem: "http://wallvff.com.br/perfil.jpg",
        tipousuario: TipoUsuario.PROFESSOR,
        navbaritens: [
            { title: "Home", url: "/", key: 1 },
            { title: "Cursos", url: "/curso", key: 2 },
            { title: "Criar Curso", url: "/curso/criar", key: 3 }
        ]
    },
    {
        id: 2,
        nome: "José Silva",
        email: "klaus",
        senha: "@admin",
        imagem: "http://josésilva.com.br/foto.jpg",
        tipousuario: TipoUsuario.ALUNO,
        navbaritens: [
            { title: "Home", url: "/", key: 1 },
            { title: "Cursos", url: "/curso", key: 2 },

        ]
    },
    {
        id: 3,
        nome: "Wallace Vidal",
        email: "admin",
        senha: "@admin",
        imagem: "https://wallvff.com.br/perfil.jpg",
        tipousuario: TipoUsuario.ALUNO,
        navbaritens: [
            { title: "Home", url: "/", key: 1 },
            { title: "Cursos", url: "/curso", key: 2 },

        ]
    },
];
export default Usuarios;