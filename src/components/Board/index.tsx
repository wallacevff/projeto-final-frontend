import BoardCSS from "@/components/Board/Board.module.css";
import Logo from "../Logo";
import { CSSProperties } from "react";
interface BoardProps {
    content: string,
    title: string,
    style?: CSSProperties
}

const Board = ({ title, content, style }: BoardProps) => {

    return <div className={BoardCSS.BoardContainer} style={style}>
        <div className={BoardCSS.Header}>
            <div className={BoardCSS.LogoTitle}>
                <div className={BoardCSS.Logo}>
                    <Logo board />
                </div>
                <div className={BoardCSS.Title}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
        <div className={BoardCSS.Content}>
            <p>{content}</p>
        </div>
    </div>
}

export default Board;