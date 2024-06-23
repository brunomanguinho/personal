import TitleSection from "../ui/titlesection";
import { propostas } from "../lib/data";
import Image from "next/image";

export default function Page(){
    return(
        <>
            <TitleSection title="Expertise" />

            <ul className="mt-3 ps-5">
                {propostas.map((proposta, i)=>{
                    return (
                        <li key={i} className="mb-3 text-justify">
                            <Image 
                                src="/imgs/coin.png"
                                width={32}
                                height={32}
                                alt=""
                                className="me-2"
                            />
                            {proposta.descricao}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}