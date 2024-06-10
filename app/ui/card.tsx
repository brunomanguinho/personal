export default function Card(
    {title, content, subtitle}:
    {
        title: string,
        subtitle?: string,
        content: string
    }
){
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
                <p className="card-text">{content}</p>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}