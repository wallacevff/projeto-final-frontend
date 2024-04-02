import Image from "next/image";
import LogoCSS from "@/components/Logo/Logo.module.css";
const UserLogo = (props: any) => {
    const logo = "/images/userIcon.png";
    return (
            <img
                className={LogoCSS.UserLogo}
                title="Logo"
                style={props.style}
                src={logo} alt={""}
            />
    );
}

export default UserLogo;