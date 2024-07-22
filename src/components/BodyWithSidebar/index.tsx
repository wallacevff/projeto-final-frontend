import BodyWithSidebarCSS from "@/components/BodyWithSidebar/BodyWithSidebar.module.css";
import SideBar from "../SideBar";
interface BodyWithSidebar{
    itens: Array<{ title: string, url: string, key: number }>;
}

export default function BodyWithSidebar({itens} : BodyWithSidebar) {
    return (
        <div className={BodyWithSidebarCSS.main}>
            <SideBar itens={itens} />
            <div className={BodyWithSidebarCSS.body}>
                <div className={BodyWithSidebarCSS.content}  style={{                 
                
                }}></div>
            </div>
        </div>
    );
}