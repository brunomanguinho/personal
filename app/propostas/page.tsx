import TitleSection from "../ui/titlesection";
import { propostas } from "../lib/data";

export default function Page(){
    return(
        <>
            <TitleSection title="Propostas" />

            <ul>
                {propostas.map((proposta, i)=>{
                    return (<li key={i}>{proposta.descricao}</li>)
                })}
            </ul>
        </>
    )
}