import {experiencias} from '@/app/lib/data';
import Card from '../ui/card';
import TitleSection from '../ui/titlesection';

export default function Experiencia(){
    return (
        <>
            <TitleSection title='Experiências' />
            
            <div className='row g-3'>
                {
                    experiencias.map((experiencia, i)=>{
                        return (
                            <div key={i} className='col-12 col-md-6'>
                                <Card 
                                    title={experiencia.empresa}
                                    subtitle={experiencia.cargo}
                                    content={
                                            'De ' + experiencia.inicio.toLocaleDateString("pt-BR", {year: "numeric", month: "numeric"}) + 
                                            ' a ' + experiencia.fim.toLocaleDateString("pt-BR", {year: "numeric", month: "numeric"})
                                        }
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}