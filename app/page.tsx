import TitleSection from "./ui/titlesection"
import {carreiras} from "@/app/lib/data"
import Career from "./ui/career"

export default function Home() {


  return (
    <>
      <TitleSection title='Carreira'/>
      {
        carreiras.map((carreira, i)=>{
          return(
            <Career 
              key={i}
              img={carreira.img}
              title={carreira.setor}
              description={carreira.descricao}
              reverse={i%2 !== 0}
            />
          );
          
        })
      }
    </>
  )
}
