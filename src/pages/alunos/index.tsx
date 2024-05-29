import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import router from "next/router";
import { useEffect } from "react";

const Alunos = () => {
    const {user} = useAuth();
    useEffect(() => {
        if (!user) {
          router.push('/login');
        }
      }, [user, router]);
    return <Layout title="Alunos"
    buttons={[<BackButton />]}>

    </Layout>
}

export default Alunos;