import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import PanelGroupButton from "@/components/PanelButtonGroup";
import PanelButton from "@/components/PanelButton";
import router from "next/router";
import { use, useContext } from "react";
import Store, { AppContext } from "@/store";
// import { withAuthentication } from "@/middlewares/withAuthentication";

// import { useAuth } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
    // const auth = useAuth();
    const state = useContext(AppContext);
    function logoff() {
        state.setUsername("");
        state.setPassword("");
        router.push("/login");
    }

    if (state.username === "" || state.password === "") {
        router.push("/login");
    }
    return (
        <Layout title="Início"

        >
            <PanelGroupButton>
                <PanelButton
                    title="Criar Curso"
                    color="#070F2B"
                    colorHove="#020614"
                    action={() => router.push("/CriarCurso")}
                ></PanelButton>
                <PanelButton
                    title="Meu Perfil"
                    color="#FC6736"
                    colorHove="#bf522e"
                    action={() => router.push("/tarefas")}
                ></PanelButton>
                <PanelButton
                    title="Logoff"
                    color="#D71313"
                    colorHove="#691111"
                    action={() => logoff()}
                ></PanelButton>
            </PanelGroupButton>
        </Layout>
    );
}

// export const getServerSideProps = withAuthentication(async (req: NextApiRequest, res: NextApiResponse) => {
//     Any additional logic you want to run on the server side before rendering the page
//     return {
//       props: {},
//     };
//   });
