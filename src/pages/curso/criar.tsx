import BackButton from "@/components/BackButton";
import Layout from "@/components/Layout";
import CriarCSS from "./Criar.module.css";
const CriarCurso = () => {
    return <Layout
        title="Criar Curso"
        buttons={[
            <BackButton key={"back-1"} />
        ]}
    >
        <div className={CriarCSS.formulario}>
            <div className={CriarCSS.border}>
                <div className={CriarCSS.formGroup}>
                    <label>Nome do Curso</label>
                    <input />
                </div>
                <div className={CriarCSS.formGroup}>
                    <label>Categoria</label>
                    <input />
                </div>
            </div>
        </div>
    </Layout>
}

export default CriarCurso;