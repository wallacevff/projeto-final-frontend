import { CSSProperties, useState } from "react";
import Button from "../Button"
import PanelButtonCSS from "./PanelButtom.module.css";

interface PanelButtonProps{
    color?: string;
    style?: CSSProperties,
    colorHove?: string,
    action?: Function,
    title?: string, 
}

const PanelButton = (props: PanelButtonProps) => {
    const [color, setColor] = useState(props.color);
    let style = {
        backgroundColor: color,
        ...props.style
    }
    return <Button style={style}
        className={PanelButtonCSS.PanelButton} type="button" title={props.title}
        action={() => typeof (props.action) !== "undefined" && props.action()}
        onMouseEnter={() => setColor(props.colorHove || props.color)}
        onMouseLeave={() => setColor(props.color)}
    ></Button >
}
export default PanelButton