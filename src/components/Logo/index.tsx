import Image from "next/image";
import LogoCSS from "@/components/Logo/Logo.module.css";
const Logo = (props: any) => {
    let logo = "/images/logoMeAjuda.png";
    if(typeof(props.navBar) !== "undefined") logo = "/images/logoMeAjuda2.png";
    return (
        <img className={LogoCSS.Logo + " " + props.className}
            title="Logo"
            src={logo} alt={""}
        />
    );
}

export default Logo;