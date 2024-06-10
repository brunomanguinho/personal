/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import NavLink from "./navlink";

export default function SideNav(){
    const links = 
        [
            {keyValue: "Home", href: "/", value: "Home"},
            {keyValue: "Formacao", href: "/formacoes", value: "Formação"},
            {keyValue: "Experiencias", href: "/experiencias", value: "Experiências"},
            {keyValue: "Propostas", href: "/propostas", value: "Propostas"}
        ]

    return(
        <>
            
                <div>
                    <Image 
                        src="/avatar.jpg"
                        width={1000}
                        height={900}
                        className="w-100 h-100 rounded"
                        alt="avatar"
                    />
                </div>
                <div>
                    <nav className="nav flex-column">
                        {links.map((link)=>{
                            return (
                            <NavLink 
                                key={link.keyValue}
                                href={link.href}
                                value={link.value}
                            />);
                        })}
                    </nav>
                </div>
            
        </>
    );
}