// "use client";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import LayoutCSS from "@/components/Layout/Layout.module.css";
import NavigationButtonGroup from "../NavigationButtonGroup";
import ToggleMenu from "../UserPictureDropDownMenu";
import handler from "@/pages/api/hello";
import { use, useEffect, useState } from "react";


const VerifyIfIsArray = (varItem : any) => {
    if(typeof(varItem?.length) !== "undefined"){
        return true;
    }
    return false;
}

const Layout = (props: any) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      // Fetch user data from API
      fetch('/api/hello')
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user data:', error));
    }, []);
    return (
        <div className={LayoutCSS.Layout}>
            <div>
                <Navbar logo=<Logo /> itens={[
                    { title: "Home", url: "/" },
                    { title: "Meus cursos", url: "/curso" },
                ]}
                picture={user?.picture}
                />
            </div>
            <div className={LayoutCSS.Header}>
                <h1>{props.title}</h1>
            </div>
            {typeof (props.buttons) !== "undefined" && <NavigationButtonGroup style={{
                marginTop: "2vh"
            }}>
                {props.buttons}
            </NavigationButtonGroup>
            }
            <div className={LayoutCSS.Body}>
                {props.children}
                
            </div>
        </div>
    );
}

export default Layout;