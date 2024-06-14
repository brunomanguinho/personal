import Image from "next/image"

export default function Career(
    {img, title, description, reverse}:
    {
        img: string,
        title: string,
        description: string,
        reverse: boolean
    }
){
    let classCareer = reverse ? "row align-items-center d-flex flex-row-reverse mt-5": "row align-items-center d-flex";
    return(
        
            // <div className="container">
                <div className={classCareer}>
                    <div className="col-3">
                        <Image 
                        src={img}
                        width={250}
                        height={250}
                        alt="Carreira"
                        className="rounded-circle career-img"
                        />
                    </div>
                    <div className="col-9 ps-5 career-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            // </div>
        
    )
}