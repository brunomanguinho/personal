'use client'
import { useSearchParams } from "next/navigation";
import { experiencias } from "@/app/lib/data";
import { playfair } from "@/app/ui/fonts";
import { Suspense } from "react";

function Search(){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const experiencia = experiencias.find((experiencia)=>experiencia.id.toString() == id);

    return(
        <>
            <div className={`${playfair.className} antialiased`}>
                <div className="row g-3">
                    <h2>Experiência Profissional</h2>

                    <h3>
                        {experiencia?.empresa + ` ( ${experiencia?.inicio.toLocaleDateString("pt-BR", {month: "2-digit", year:"numeric"})} - ${experiencia?.fim.toLocaleDateString("pt-BR", {month: "2-digit", year:"numeric"})} ) `}
                    </h3>
                </div>
                
            </div>
            <div className="mt-3 ps-5">
                {experiencia?.descricao.map((item, i)=>{
                    return(
                        <p key={i}>{item}</p>
                    )
                })}
            </div>
        </>
    )    
}

export default function Descricao(){
    return(
        <Suspense>
            <Search />
        </Suspense>   
    )
}