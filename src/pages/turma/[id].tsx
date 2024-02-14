import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import PanelButton from "@/components/PanelButton";
import PanelGroupButton from "@/components/PanelButtonGroup";
import { AppContext } from "@/store";
import Router, { useRouter } from "next/router";
import { useContext } from "react";

const CursoId = () => {
    const router = useRouter();
    let id = router.query.id;
    const state = useContext(AppContext);
    if(state.username === "" ||state.password === ""){
        router.push("/login");
    }
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
                    action={() => router.push("/Alunos")}
                ></PanelButton>
            </PanelGroupButton>

        </Layout>
    );
}

export default CursoId;