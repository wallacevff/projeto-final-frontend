import Image from "next/image";
import LogoCSS from "@/components/Logo/Logo.module.css";
const Logo = (props: any) => {
    const logo = "/images/logoMeAjuda.png";
    return (
        <img className={LogoCSS.Logo + " " + props.className}
            title="Logo"
            src={logo} alt={""}
        />
    );
}

export default Logo;