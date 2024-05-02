import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import CustomizedTables from "@/components/Table";

const Tarefas = () => {

    return <Layout title="Tarefas"
    buttons={[<BackButton key={"back-1"}/>]}>
    
    <CustomizedTables 


    />
    </Layout>
}

export default Tarefas;