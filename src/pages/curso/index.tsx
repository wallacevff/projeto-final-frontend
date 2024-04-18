import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import CursoInfo from "@/components/CursoInfo";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import BackButton from "@/components/BackButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Layout title="Meus Cursos"
        buttons={[
            <BackButton key={"back-1"}/>
        ]}
        >
            <Cards style={{
                marginTop: "calc(100vh * 0.15)"
            }
            }>
                <Card title="Curso de Inglês" link="curso/1">
                    <CursoInfo
                        NroTurmas={10}
                        NroAlunos={100}
                        NroTarefas={0}
                    />
                </Card>
                <Card title="Curso de Alemão" link="curso/2">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
                <Card title="Curso de Inglês" link="curso/3">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
                <Card title="Curso de Inglês" link="curso/4">
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
                <Card title="Curso de Inglês" link="curso/6">
                    <CursoInfo
                        NroTurmas={1}
                        NroAlunos={20}
                        NroTarefas={12}
                    />
                </Card>
            </Cards>
        </Layout>
    );
}
