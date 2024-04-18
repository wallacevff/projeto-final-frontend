
import React from "react";

const PanelGroupButton = (props: any) =>
    <div style={{
        marginTop: "calc(100vh * 0.15)",
        display: "flex",
        width: "80vw",
        // flex: 1,
        justifyContent: "space-between"
    }}>
        {props.children.length && 
                props.children.map((el: any, i: number) => 
                    React.cloneElement(el, {key : `buttonNav-${i}`})
                )
           }
        
    </div>

export default PanelGroupButton;