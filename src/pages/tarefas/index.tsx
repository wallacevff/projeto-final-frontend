import BackButton from "@/components/BackButton";
import BodyWithSidebar from "@/components/BodyWithSidebar";
import Layout from "@/components/Layout";
import SideBar from "@/components/SideBar";
import CustomizedTables from "@/components/Table";
import TarefaBody from "@/components/TarefaBody";
import { useAuth } from "@/contexts/AuthContext";
import router from "next/router";
import { useEffect } from "react";

const Tarefas = () => {
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const itens = [
    { title: "Atividade 1", url: "/alunos", key: 2 },
    { title: "Atividade 2", url: "/turmas", key: 3 },
    { title: "Atividade 3", url: "/cursos", key: 4 },
    { title: "Atividade 4", url: "/professores", key: 5 },
    { title: "Atividade 5", url: "/tarefas", key: 6 }
  ];


  return <Layout title="Tarefas"
    sidebar={true}
    buttons={[<BackButton key={"back-1"} />]}>
      <BodyWithSidebar itens={itens}/>
    {/* <div style={{display: "flex"}}>
      <SideBar itens={itens} />
      <TarefaBody />
    </div> */}
  </Layout>
}

export default Tarefas;