import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

const Forum = () => {

    return <Layout
        title="Forum"
        buttons={[<BackButton />]}
    >
        <Link href={"/forum/1"}>
            <Card title="Topico 1">
                <h3>Descrição: AsDSDAD</h3>
                <h2>Criado por: Fulado de Tal</h2>
            </Card>
        </Link>
        <Link href={"/forum/2"}>
            <Card title="Topico 2">
                <h3>Descrição: AsDSDAD</h3>
                <h2>Criado por: Fulado de Tal</h2>
            </Card>
        </Link>
        <Link href={"/forum/3"}>
            <Card title="Topico 3">
                <h3>Descrição: AsDSsadddddddddddddddddddddddddddddddddddddddDAD</h3>
                <h2>Criado por: Fulado de Tal</h2>
            </Card>
        </Link>
    </Layout>
}

export default Forum;