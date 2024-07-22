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


interface LayoutProps {
    title?: string;
    user?: User;
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
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Fetch user data from API
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);
    if (!props.sidebar) {
        return (
            <div className={LayoutCSS.LayoutContainer} style={props.containerStyle}>
                <div className={LayoutCSS.Layout} style={props.layoutStyle}>
                    <Navbar logo=<Logo navBar /> itens={[
                        { title: "Home", url: "/", key: 1 },
                        { title: "Cursos", url: "/curso", key: 2 },
                        { title: "Teste", url: "/", key: 3 },
                    ]}
                        picture={user?.picture}
                    />

                    {typeof (props.buttons) !== "undefined" && <NavigationButtonGroup style={{
                        marginTop: "calc(var(--navbar-height) + 10px)",
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
            <div className={LayoutCSS.Layout} style={props.layoutStyle}>
                <Navbar logo=<Logo navBar /> itens={[
                    { title: "Home", url: "/", key: 1 },
                    { title: "Cursos", url: "/curso", key: 2 },
                    { title: "Teste", url: "/", key: 3 },
                ]}
                    picture={user?.picture}
                />

                {/* {typeof (props.buttons) !== "undefined" && <NavigationButtonGroup style={{
                    marginTop: "calc(var(--navbar-height) + 10px)",
                    ...props.layoutNavigationButtonGroupStyle
                }}>
                    {props.buttons}
                </NavigationButtonGroup>
                } */}
                {/* <div className={LayoutCSS.Header}
                    style={props.layoutHeaderStyle}
                >
                    <h2><b>{props.title}</b></h2>
                </div> */}

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