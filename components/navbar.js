import React from "react";
import Link from 'next/link'    
export function Navbar() {
    return(
        <nav className="h-[10vh] w-screen flex bg-white absolute top-0 left-0">
            <ul className='flex h-[10vh] w-screen justify-center right-0'>
                {[
                    ['Hjem', '/'],
                    ['Blog', '/blog'],
                    ['Kontakt', '/kontakt'],
                    ['Om os', '/om-os'],
                ].map(([title, url], num) => (
                    <li key={num} className="relative p-2 m-4 text-black after:absolute after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-violet-500 after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:transition-all after:rounded-xl after:ease-in-out"><Link href={url} className="">{title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}