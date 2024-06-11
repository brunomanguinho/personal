import { playfair } from "./fonts"

export default function TitleSection({title}:{title:string}){
    return (
        <h1 className={`${playfair.className} mb-3`}>{title}</h1>
    )

}