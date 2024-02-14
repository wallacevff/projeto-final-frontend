import { useState } from "react";
import Button from "../Button"
import PanelButtonCSS from "./PanelButtom.module.css";
const PanelButton = (props: any) => {
    const [color, setColor] = useState(props.color);
    let style = {
        backgroundColor: color
    }
    return <Button style={style}
        className={PanelButtonCSS.PanelButton} type="button" title={props.title}
        action={() => typeof (props.action) !== "undefined" && props.action()}
        onMouseEnter={() => setColor(props.colorHove || props.color)}
        onMouseLeave={() => setColor(props.color)}
    ></Button >
}
export default PanelButton