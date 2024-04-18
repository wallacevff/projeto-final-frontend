import { useRouter } from "next/router";
import Button from "../Button"
import React from "react";

const NavigationButtonGroup = (props: any) => {
    const router = useRouter();
    return (
        <div style={{
            display: "flex",
            flexDirection: "line",
            flex: 1,
            alignContent: "normal",
            width: "-webkit-fill-available",
            marginLeft: "1rem",
            ...props?.style
        }}>

           {/* {props.children} */}
           {props.children.length && 
                props.children.map((el: any, i: number) => 
                    React.cloneElement(el, {key : `buttonNav-${i}`})
                )
           }

        </div>
    );
}
export default NavigationButtonGroup;