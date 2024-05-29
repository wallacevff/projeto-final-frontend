import BackButton from "@/components/BackButton";

import Layout from "@/components/Layout";
import PanelButton from "@/components/PanelButton";
import PanelGroupButton from "@/components/PanelButtonGroup";
import { useAuth } from "@/contexts/AuthContext";
import Router, { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const CursoId = () => {
    const router = useRouter();
    let id = router.query.id;
    const {user} = useAuth();
    useEffect(() => {
        if (!user) {
          router.push('/login');
        }
      }, [user, router]);

    return (
        <Layout title={`Turma: ${id}`}
            buttons={[
                <BackButton key={"back-1"}/>
            ]}
        >
            <PanelGroupButton>
                <PanelButton
                    title="Forum"
                    color="#070F2B"
                    action={() => router.push("/forum")}
                ></PanelButton>
                <PanelButton
                    title="Tarefas"
                    color="#FC6736"
                    action={() => router.push("/tarefas")}
                ></PanelButton>
                <PanelButton
                    title="Alunos"
                    color="#211951"
                    action={() => router.push("/alunos")}
                ></PanelButton>
            </PanelGroupButton>

        </Layout>
    );
}

export default CursoId;