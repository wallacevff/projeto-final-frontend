import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import PanelGroupButton from "@/components/PanelButtonGroup";
import PanelButton from "@/components/PanelButton";
import router, { useRouter } from "next/router";
import { use, useContext, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Board from "@/components/Board";
import HomeCSS from "@/styles/home.module.css";
// import { withAuthentication } from "@/middlewares/withAuthentication";

// import { useAuth } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
    // const auth = useAuth();
    const { user } = useAuth();
    const { logout } = useAuth();
    const router = useRouter();
    function logoff() {
        logout();
    }
    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);
    return (
        <Layout title=""
        ><div className={HomeCSS.HomeContainer}>
                <Board title="ME AJUDA AI" content='Bem-vindo(a) ao ME AJUDA AI, a sua plataforma de aprendizado online!'
                    style={{
                        marginTop: "calc((var(--navbar-height) + var(--footer-height))/1.5)",
                        padding: "30px",
                        wordWrap: "break-word"
                        
                    }}
                />
            </div>
        </Layout>
    );
}

// export const getServerSideProps = withAuthentication(async (req: NextApiRequest, res: NextApiResponse) => {
//     Any additional logic you want to run on the server side before rendering the page
//     return {
//       props: {},
//     };
//   });
