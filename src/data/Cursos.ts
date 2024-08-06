import Curso from "@/types/domain/curso/Curso";

const Cursos : Curso[] = [
    {
        id: "92a3a3ea-edfe-4a4c-98c7-2438c8f697c5",
        nome: "Curso de Português",
        categoriaId: "387cd698-4b8f-4ca5-9810-535a924abc71",
        cursocategoria: {
            id: "387cd698-4b8f-4ca5-9810-535a924abc71",
            nome: "Linguística",
        },
        turmas: [
            {
                id: "45153028-8792-4092-b873-0094246b6446",
                numero: 1,
                nome: "Português I",
                qtdAlunosPermitidos: 10,
            },
            {
                id: "e5ff6bc8-6617-4353-b754-ef594cde3f92",
                numero: 2,
                nome: "Português II",
                qtdAlunosPermitidos: 10,
            }
        ]
    },
    {
        id: "92a3a3ea-edfe-4a4c-98c7-2438c8f697c6",
        nome: "Curso de Matemática",
        categoriaId: "387cd698-4b8f-4ca5-9810-535a924abc71",
        cursocategoria: {
            id: "387cd698-4b8f-4ca5-9810-535a924abc71",
            nome: "Ciências Exatas",
        },
        turmas: [
            {
                id: "45153028-8792-4092-b873-0094246b6446",
                numero: 1,
                nome: "Matemática I",
                qtdAlunosPermitidos: 10,
            },
            {
                id: "e5ff6bc8-6617-4353-b754-ef594cde3f92",
                numero: 3,
                nome: "Matemática II",
                qtdAlunosPermitidos: 10,
            },
            {
                id: "e5ff6bc8-6617-4353-b754-ef594cde3f93",
                numero: 4,
                nome: "Algebra",
                qtdAlunosPermitidos: 10,
            },
            {
                id: "e5ff6bc8-6617-4353-b754-ef594cde3f94",
                numero: 5,
                nome: "Geometria",
                qtdAlunosPermitidos: 10,
            }
        ]
    }
];


export default Cursos;