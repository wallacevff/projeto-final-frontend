import { useRouter } from "next/router";
import Button from "../Button"

const NavigationButtonGroup = (props: any) => {
    const router = useRouter();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignContent: "normal",
            width: "-webkit-fill-available",
            marginLeft: "1rem",
            ...props?.style
        }}>

           {props.children}

        </div>
    );
}
export default NavigationButtonGroup;