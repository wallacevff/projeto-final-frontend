import BackButton from "@/components/BackButton";

import Layout from "@/components/Layout";
import PanelButton from "@/components/PanelButton";
import PanelGroupButton from "@/components/PanelButtonGroup";
import Router, { useRouter } from "next/router";
import { useContext } from "react";

const CursoId = () => {
    const router = useRouter();
    let id = router.query.id;
    return (
        <Layout title={`Turma: ${id}`}
            buttons={[
                <BackButton />
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