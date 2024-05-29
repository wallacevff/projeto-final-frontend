import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import CustomizedTables from "@/components/Table";
import { useAuth } from "@/contexts/AuthContext";
import router from "next/router";
import { useEffect } from "react";

const Tarefas = () => {
    const {user} = useAuth();
    useEffect(() => {
        if (!user) {
          router.push('/login');
        }
      }, [user, router]);
    return <Layout title="Tarefas"
    buttons={[<BackButton key={"back-1"}/>]}>
    
    <CustomizedTables 


    />
    </Layout>
}

export default Tarefas;