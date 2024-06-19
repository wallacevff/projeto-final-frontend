import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import Layout from "@/components/Layout";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const CursoId = () => {
    const router = useRouter();
    let id = router.query.id;
    return (
        <Layout title={`Curso: ${id}`}
            buttons={[
                <BackButton key={"back-1"}/>
            ]}>

            <Cards
                style={{
                    // marginTop: "calc(100vh * 0.15)"
                }}
            >
                <Card title="Turma 1" link="/turma/1">

                </Card>
                <Card title="Turma 2" link="/turma/2">

                </Card>
                <Card title="Turma 2" link="/turma/3">

                </Card>
            </Cards>
        </Layout>
    );
}

export default CursoId;