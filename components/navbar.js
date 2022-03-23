import React from "react";
import Link from 'next/link' 
import { useRouter } from "next/router";   
export function Navbar() {
    const router = useRouter();
    return(
        <nav className="h-[10vh] w-screen flex fixed z-[99999] bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <ul className='flex h-[10vh] w-screen justify-center right-0'>
                {[
                    ['Hjem', '/'],
                    ['Blog', '/blog'],
                    ['Kontakt', '/kontakt'],
                    ['Om os', '/om-os'],
                ].map(([title, url], num) => (
                    <li key={num} className={`relative p-2 m-4 text-white after:absolute after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-violet-500 after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:transition-all after:rounded-xl after:ease-in-out ${router.pathname == url ? "after:w-full" : ""}`}><Link href={url} className="">{title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}