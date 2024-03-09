import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import CreateButton from "@/components/CreateButton";
import Layout from "@/components/Layout";
import QuillEditor from "@/components/QuillEditor";

const Forum = () => {

    return <Layout
        title="Tópico"
        buttons={[<BackButton />]}
    >
        
        <QuillEditor value={""} onChange={() => ""} />
    </Layout>
}

export default Forum;