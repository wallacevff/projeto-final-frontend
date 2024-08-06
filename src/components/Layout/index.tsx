// "use client";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import LayoutCSS from "@/components/Layout/Layout.module.css";
import NavigationButtonGroup from "../NavigationButtonGroup";
import ToggleMenu from "../UserPictureDropDownMenu";
import handler from "@/pages/api/login";
import { CSSProperties, ReactNode, use, useEffect, useState } from "react";
import { Footer } from "../Footer";
import SideBar from "../SideBar";
import { Usuario } from "@/types/domain/usuario/Usuario";
import { NavbarItem } from "@/types/navbar/NavBarItem";
import MenuItensService from "@/services/MenuItensService";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
    title?: string;
    user?: Usuario;
    children?: ReactNode;
    containerStyle?: CSSProperties;
    layoutStyle?: CSSProperties;
    layoutNavigationButtonGroupStyle?: CSSProperties;
    layoutHeaderStyle?: CSSProperties;
    layoutBodyStyle?: CSSProperties;
    buttons?: ReactNode;
    sidebar?: boolean;
}


const VerifyIfIsArray = (varItem: any) => {
    if (typeof (varItem?.length) !== "undefined") {
        return true;
    }
    return false;
}

const Layout = (props: LayoutProps) => {
    const {user} = useAuth();
    // console.log(user);
    // const [menuItems, setMenuItems] = useState<NavbarItem[]>([]);
    // useEffect(() => {    
    //     MenuItensService.getMenuItens().then(menuItems => setMenuItems(menuItems));
         
    // }, []);
    if (!props.sidebar) {
        return (
            <div className={LayoutCSS.LayoutContainer} style={props.containerStyle}>

                <Navbar logo=<Logo navBar /> itens={user?.navbaritens}
                    picture={user?.imagem}
                />
                <div className={LayoutCSS.Layout} style={props.layoutStyle}>
                    {typeof (props.buttons) !== "undefined" && <NavigationButtonGroup style={{
                        // marginTop: "calc(var(--navbar-height) + 10px)",
                        ...props.layoutNavigationButtonGroupStyle
                    }}>
                        {props.buttons}
                    </NavigationButtonGroup>
                    }
                    <div className={LayoutCSS.Header}
                        style={props.layoutHeaderStyle}
                    >
                        <h2><b>{props.title}</b></h2>
                    </div>

                    <div className={LayoutCSS.Body}
                        style={props.layoutBodyStyle}
                    >
                        {props.children}
                    </div>

                </div>
                <Footer>
                </Footer>
            </div>

        );
    }
    else {
        return <div className={LayoutCSS.LayoutContainer} style={props.containerStyle}>
           
                <Navbar logo=<Logo navBar /> itens={menuItems}
                    picture={user?.imagem}
                />
                <div className={LayoutCSS.LayoutWithSidebar} style={props.layoutStyle}>        

                <div className={LayoutCSS.Body}
                    style={props.layoutBodyStyle}
                >
                    {props.children}
                </div>
            </div>
            <Footer>
            </Footer>
        </div>
    }
}

export default Layout;

