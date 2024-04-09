
import NavbarCSS from "@/components/Navbar/Navbar.module.css";
import { NavBarProps } from "@/types/navbar/NavBarProps";
import Link from "next/link";
import ToggleMenu from "../UserPictureDropDownMenu";
const Navbar = (props: NavBarProps) => {
    return (
        <div className={NavbarCSS.NavbarRoot}>
            {props.logo}
            <ul id={"ulNavbar1"}>
                {props.itens.map((el, key) =>
                    <Link 
                        id={`Item-Link-${key}`}
                        key={`Item-Link-${key}`}
                        href={el.url}><li id={`Item-${key}`}
                        key={`Item-${key}`}
                        style={{marginLeft: "20px"}}
                    >{el.title}
                    </li>
                    </Link>
                )
                }
            </ul>
            <ToggleMenu className={NavbarCSS.ToggleMenu}>
                <a className={NavbarCSS.UserPicture} style={{backgroundImage: `url(${props.picture})`}} ></a>
            </ToggleMenu>
            
        </div>
    );
}
export default Navbar;