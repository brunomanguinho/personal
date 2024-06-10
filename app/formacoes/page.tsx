import {formacoes} from "@/app/lib/data";
import Card from "../ui/card";

export default function Formacao(){
    return (
        <>
            <h2>Formações</h2>

            <div className='row g-3'>
                {
                    formacoes.map((formacao, i)=>{
                        return (
                            <div className="col-12 col-md-6" key={i}>
                                <Card 
                                    title={formacao.tipo}
                                    subtitle={formacao.instituicao}
                                    content={formacao.curso}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}