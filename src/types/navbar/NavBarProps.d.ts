import { CSSProperties } from "react";

interface NavBarProps{
    key?: number;
    itens?: {title: string, url: string, key: number}[];
    logo: JSX.Element;
    style?: CSSProperties;
    picture?: string;
}