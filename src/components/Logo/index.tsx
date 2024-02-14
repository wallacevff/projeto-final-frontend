import Image from "next/image";
import LogoCSS from "@/components/Logo/Logo.module.css";
const Logo = () => {
    const logo = "/images/logoMeAjuda.jpg";
    return (
        <img className={LogoCSS.Logo}
            title="Logo"
            src={logo} alt={""}
        />
    );
}

export default Logo;