import SideBarCSS from "@/components/SideBar/SideBar.module.css";
interface SideBarProps{
    itens: Array<{title: string, url: string, key: number}>;
}


const SideBar = ({itens}: SideBarProps) => {
    
    return <div className={SideBarCSS.main}>
        <ul className={SideBarCSS.sidebar}>
           {
               itens.map(item => {
                return (
                    <li key={item.key}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                )

                })
           }
        </ul>
    </div>   
}

export default SideBar;