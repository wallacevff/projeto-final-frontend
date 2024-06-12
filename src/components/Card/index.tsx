import CardCSS from "@/components/Card/Card.module.css";
import Link from "next/link";

const Card = (props: any) => {
    const card = (typeof (props.link) !== "undefined" ? <Link href={props.link}>
        <div className={CardCSS.Card}>
            <div className={CardCSS.Header}>
                <span>{props.title}</span>
            </div>
            <div className={CardCSS.ProgressBar}>
                <div className={CardCSS.Progress} style={{ width: `${100}%` }}></div>
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