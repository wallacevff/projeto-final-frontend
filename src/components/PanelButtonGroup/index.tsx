
import React from "react";
import PanelButtonCSS from "./PanelButtonGroup.module.css";
const PanelGroupButton = (props: any) =>
    <div className={PanelButtonCSS.Group} >
        {props.children.length && 
                props.children.map((el: any, i: number) => 
                    React.cloneElement(el, {key : `buttonNav-${i}`})
                )
           }
        
    </div>

export default PanelGroupButton;