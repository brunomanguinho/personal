import React from "react"
import Link from "next/link"

export default function NavLink(
    {href, value}:
    {
        href: string,
        value: string
    })
{
    return (
        
        <div className="col-3 col-md-12 border link-container rounded">
            <Link 
                key={value}
                href={href}
                className="menu-link" 
            >      
                {value}
            </Link>
        </div>

    )
}