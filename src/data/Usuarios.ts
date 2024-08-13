import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";
import { Usuario } from "@/types/domain/usuario/Usuario";

const Usuarios: Usuario[] = [
    {
        id: 1,
        nome: "Wallace Vidal",
        email: "wallvff",
        senha: "123",
        imagem: "https://wallvff.com.br/perfil.jpg",
        tipousuario: TipoUsuario.PROFESSOR,
        navbaritens: [
            { title: "Home", url: "/", key: 1 },
            { title: "Cursos", url: "/curso", key: 2 },
            { title: "Criar Curso", url: "/curso/criar", key: 3 }
        ]
    },
    {
        id: 2,
        nome: "Robert Leite",
        email: "robert",
        senha: "123",
        imagem: "https://wallvff.com.br/robert.png",
        tipousuario: TipoUsuario.ALUNO,
        navbaritens: [
            { title: "Home", url: "/", key: 1 },
            { title: "Meus Cursos", url: "/curso", key: 2 },
            { title: "Minhas Notas", url: "/notas", key: 3  },
            { title: "Inscrição Cursos", url: "/cursosDisponiveis", key: 3  },
        ]
    },
    {
        id: 3,
        nome: "Diego Silva",
        email: "diego",
        senha: "123",
        imagem: "https://wallvff.com.br/diego.png",
        tipousuario: TipoUsuario.PROFESSOR,
        navbaritens: [
            { title: "Home", url: "/", key: 1 },
            { title: "Cursos", url: "/curso", key: 2 },
            { title: "Criar Curso", url: "/curso/criar", key: 3 }
        ]
    },
];
export default Usuarios;