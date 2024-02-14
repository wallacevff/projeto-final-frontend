import router from "next/router"
import Button from "../Button"

const BackButton = (props: any) => {

    return <Button
        type="button"
        title="Voltar"
        action={() => router.back()}
        style={{
            // display: "flex",
            // flex: 1,
            width: "15vh",
            backgroundColor: "#FF9130",
            fontSize: "3vh",
            fontWeight: "1000"
        }}
    ></Button>
}
export default BackButton;