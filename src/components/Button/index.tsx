import ButtonCSS from "@/components/Button/Button.module.css";
import { ButtonProps } from "@/types/button/ButonProps";

const Button = (props: ButtonProps) => {
    const styles = props.style;
    return (
        <button
            onMouseEnter={props?.onMouseEnter}
            onMouseLeave={props?.onMouseLeave}
            style={styles}
            type="button" className={`${ButtonCSS.Button} ${props?.className}`}
            onClick={() => typeof (props.action) !== "undefined" && props.action()}
        >{props.title}</button>
    );
}

export default Button;