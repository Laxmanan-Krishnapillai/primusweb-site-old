import React from "react";
import Link from 'next/link'    
export default function Navbar() {
    return(
        <nav className=" absolute top-0 left-0 w-screen flex justify-around bg-white">
            <ul className="flex w-100 justify-center">
                {[
                    ['Home', '/'],
                    ['Blog', '/blog'],
                    ['Projects', '/projects'],
                    ['Reports', '/reports'],
                ].map(([title, url], num) => (
                    <li key={num} className="relative p-2 m-4 text-red-700 after:absolute after:h-1 after:bg-gradient-to-r after:from-yellow-200 after:via-green-200 after:to-green-300 after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:transition-all after:rounded-xl after:ease-in-out"><Link href={url} className="">{title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}