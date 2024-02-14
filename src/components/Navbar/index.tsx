
import NavbarCSS from "@/components/Navbar/Navbar.module.css";
import { NavBarProps } from "@/types/navbar/NavBarProps";
import Link from "next/link";
const Navbar = (props: NavBarProps) => {
    return (
        <div className={NavbarCSS.NavbarRoot}>
            {props.logo}
            <ul>
                {props.itens.map(el =>
                    <Link href={el.url}><li style={{marginLeft: "20px"}}>{el.title}</li></Link>
                )
                }
            </ul>
            <span className={NavbarCSS.UserPicture} style={{backgroundImage: `url(${"http://wallvff.com.br/perfil.jpg"})`}}>
                
            </span>
        </div>
    );
}
export default Navbar;