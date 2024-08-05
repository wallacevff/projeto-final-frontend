import CardCSS from "@/components/Card/Card.module.css";
import Link from "next/link";

interface CursoInfoProps {
    title: string;
    progressBar?: number;
    link?: string;
    children?: React.ReactNode;
}


const Card = (props: CursoInfoProps) => {
    const card = (typeof (props.link) !== "undefined" ? <Link href={props.link}>
        <div className={CardCSS.Card}>
            <div className={CardCSS.Header}>
                <span>{props.title}</span>
                {props.progressBar && 
                    <span>{props.progressBar}%</span>
                }
            </div>
            <div className={CardCSS.ProgressBar}>
                <div className={CardCSS.Progress} style={{ width: `${props.progressBar ?? 100}%` }}></div>
            </div>
            <div className={CardCSS.Body}>
                {props.children}
            </div>
        </div>
    </Link> :
        <div className={CardCSS.Card}>
            <div className={CardCSS.Header}>
                <h2>{props.title}</h2>
            </div>
            <div className={CardCSS.Body}>
                {props.children}
            </div>
        </div>);
    return card;
}
export default Card