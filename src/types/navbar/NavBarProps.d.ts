import { CSSProperties } from "react";

interface NavBarProps{
    itens: {title: string, url: string}[];
    logo: JSX.Element;
    style?: CSSProperties;
}