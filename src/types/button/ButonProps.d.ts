import { CSSProperties } from "react";

interface ButtonProps{
    title: string;
    className?: string
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    type: string = "button";
    action?: Function;
    color?: string;
    colorHove?: string;
    style?: CSSProperties;
}