import { useRouter } from "next/router";
import Button from "../Button"
import React from "react";
import { CSSProperties } from "@mui/material/styles/createMixins";

const NavigationButtonGroup = (props: any) => {
    const router = useRouter();
    const styles: CSSProperties = 
        {
            display: "flex",
            flexDirection: "line",
            flex: 1,
            alignContent: "normal",
            width: "-webkit-fill-available",
            marginLeft: "1rem",
            ...props?.style
        }    

    return (
        <div style={styles}>
           {props.children.length && 
                props.children.map((el: any, i: number) => 
                    React.cloneElement(el, {key : `buttonNav-${i}`})
                )
           }
        </div>
    );
}
export default NavigationButtonGroup;