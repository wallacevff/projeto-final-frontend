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
import { TipoUsuario } from "@/types/domain/usuario/TipoUsuario";

const inter = Inter({ subsets: ["latin"] });

export default function CursosPage() {
    const { user } = useAuth();
    const [cursos, setCursos] = useState<Curso[]>([]);


    useEffect(() => {
        var getCursos = () => {};
        if(router.query.all) {
            getCursos = async () => { setCursos(await CursosService.getCursos()); };
            getCursos();
            return;
        }
        if (!user) {
            router.push('/login');
        }
        if(user?.tipousuario === TipoUsuario.PROFESSOR) {
            getCursos = async () => { setCursos(await CursosService.getCursosProfessor(user.id)); };
            getCursos();
            return;
        }
        else{
            getCursos = async () => { setCursos(await CursosService.getCursosAluno(user!.id)); };
            getCursos();
        }
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

            </Cards>
        </Layout>
    );
}
