import router from "next/router"
import Button from "../Button"
import { ButtonProps } from "@/types/button/ButonProps";

const CreateButton = (props: ButtonProps) => {

    return <Button
        type="button"
        title="Criar"
        action={props.action}
        style={{
            ...props?.style,
            // display: "flex",
            // flex: 1,
            color: "#3DD506",
            textDecorationLine: "underline",
            // display: "flex",
            // flex: 1,
            // width: "15vw",
            // backgroundColor: "#FF9130",
            fontSize: "3vh",
            fontWeight: "1000"
        }}
    ></Button>
}
export default CreateButton;