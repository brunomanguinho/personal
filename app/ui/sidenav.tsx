/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import NavLink from "./navlink";
import Link from "next/link";

export default function SideNav(){
    
    const links = 
        [
            {keyValue: "Home", href: "/", value: "Home"},
            {keyValue: "Formacao", href: "/formacoes", value: "Formação"},
            {keyValue: "Experiencias", href: "/experiencias", value: "Experiências"},
            {keyValue: "Expertise", href: "/expertise", value: "Expertise"}
        ]

    return(
        <>
            <div className="row">
                <div className="col-md-12 mb-2 text-center">
                    <Image 
                        src="/avatar.jpg"
                        width={250}
                        height={250}
                        className="rounded img-fluid"
                        alt="avatar"
                    />
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {links.map((link)=>{
                            return (
                            <NavLink 
                                key={link.keyValue}
                                href={link.href}
                                value={link.value}
                            />);
                        })}
                    </div>
                    <div className="row">
                        <div className="col-6 text-center mt-3 ps-5">
                            <Link
                                href='https://www.linkedin.com/in/emicles-manguinho-filho-56991734/'
                            >
                                <Image 
                                    src="/imgs/linkedin.png"
                                    alt="linkedin"
                                    width={48}
                                    height={48}
                                />                               
                            </Link>
                        </div>
                        <div className="col-6 text-center mt-3 pe-5">
                            <Link
                                href='mailto:emiclesmang@hotmail.com'
                            >
                                <Image 
                                    src="/imgs/mail.png"
                                    alt="mail"
                                    width={48}
                                    height={48}
                                />                               
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}