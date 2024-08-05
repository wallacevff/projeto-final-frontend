import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import CursoInfo from "@/components/CursoInfo";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import BackButton from "@/components/BackButton";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import router from "next/router";
import CursosService from "@/services/CursosService";
import Curso from "@/types/domain/curso/Curso";

const inter = Inter({ subsets: ["latin"] });

export default function CursosPage() {
    const { user } = useAuth();
    const [cursos, setCursos] = useState<Curso[]>([]);


    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
        const getCursos = async () => { await CursosService.getCursos(); setCursos(await CursosService.getCursos()); };
        getCursos();
    }, [user, router]);
  


    return (
        <Layout title="Meus Cursos"
            buttons={[
                <BackButton key={"back-1"} />
            ]}
        >
            <Cards>
                {
                    cursos.length > 0 ?
                    cursos.map((curso) => (
                        <Card key={curso.id} title={curso.nome} link={`/curso/curso/${curso.id}`}>
                            <CursoInfo NroTurmas={curso.turmas?.length} NroAlunos={100} NroTarefas={0} />
                        </Card>
                    )) : <></>
                }


                {/* <Card title="Curso de Alemão" link="curso/curso/2">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
                <Card title="Curso de Inglês" link="curso/curso/3">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
                <Card title="Curso de Inglês" link="curso/curso/4">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
                <Card title="Curso de Inglês" link="curso/5">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
                <Card title="Curso de Inglês" link="curso/curso/6">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card> */}
            </Cards>
        </Layout>
    );
}
