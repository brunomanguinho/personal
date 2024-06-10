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
        <Link 
            key={value}
            href={href}
            className="nav-link"
        >      
            {value}
        </Link>
    )
}