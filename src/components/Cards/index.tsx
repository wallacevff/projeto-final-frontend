import CardsCSS from "@/components/Cards/Cards.module.css";
const Cards = (props: any) =>
    <div className={CardsCSS.Cards}
        style={props.style}
    >
        {props.children}
    </div>

export default Cards;