export default function Card(
    {title, content, subtitle, resume}:
    {
        title: string,
        subtitle?: string,
        content: string,
        resume?: string
    }
){
    
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
                <p className="card-text">{content}</p>
                {(resume?.toString() === "" || resume == null) ? <></> : 
                    <div className="p-1 text-justify">
                        <small>{resume}
                                <span className="text-decoration-underline fw-bolder">...mais</span> 
                        </small>
                    </div> }
            </div>
        </div>
    )
}