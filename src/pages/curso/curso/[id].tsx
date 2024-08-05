import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import Layout from "@/components/Layout";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import { useAuth } from "@/contexts/AuthContext";
import CursosService from "@/services/CursosService";
import Curso from "@/types/domain/curso/Curso";
import { UUID } from "crypto";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CursoId = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [curso, setCurso] = useState<Curso | null>(null);
    const [cursoId, setCursoId] = useState(router.query.id);
    
    useEffect(() => {
        console.log(user);
        if (!user) {
            router.push('/login');
        }
        const getCurso = async () => {
            setCurso(await CursosService.getCurso(cursoId as UUID));
        };
        getCurso();

    }, [user, router]);

    return (
        <Layout title={`Curso: ${curso?.nome || "Carregando..."}`}
            buttons={[
                <BackButton key={"back-1"}/>
            ]}>

            <Cards
                style={{
                    // marginTop: "calc(100vh * 0.15)"
                }}
            >

                {
                    curso?.turmas && curso.turmas.map((turma) => (
                        <Link href={`/turma/${turma.id}`} key={turma.id}>
                            {/* TODO: Renderizar TurmaInfo verificando se o usuário 
                            está matriculado nesta turma e o tipo de usuario é aluno ou 
                            professor */}
                                <Card title={turma.nome} key={turma.id}>
                                    <p>Nro Alunos: {0}</p>
                                    <p>Nro Tarefas: {0}</p>
                                    <p>Status: {0}</p>
                                </Card>
                        </Link>                        
                    ))
                }
            </Cards>
        </Layout>
    );
}

export default CursoId;