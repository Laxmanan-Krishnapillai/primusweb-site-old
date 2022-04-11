import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export function Navbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      {/**Menuicon*/}
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`flex flex-col w-10 h-6 z-[101] fixed right-5 items-end top-10 group transition-[width] duration-300 ease-in-out cursor-pointer`}
      >
        <div className="w-full h-1 mb-1 group-hover:w-6 bg-white transition-[inherit]"></div>
        <div className="w-6 h-1 mb-1 group-hover:w-full bg-white transition-[inherit]"></div>
        <div className="w-full h-1 group-hover:w-6 bg-white transition-[inherit]"></div>
      </div>
      <nav
        className={`w-20 h-screen flex fixed z-[100] bg-gray-900 bottom-0 right-0 transition-transform ease-in-out ${
          showMenu ? "translate-x-full" : ""
        }`}
      >
        {/**Circle that shows link active status */}
        <div
          className={`w-2 h-2 absolute bg-white rounded-xl left-1 flex items-center justify-center`}
        >
          <div className="absolute w-2 h-2 animate-ping bg-white rounded-full"></div>
        </div>
        <ul className="flex flex-col h-screen w-full justify-center right-0">
          {[
            ["Hjem", "/"],
            ["Blog", "/blog"],
            ["Kontakt", "/kontakt"],
            ["Om os", "/om-os"],
          ].map(([title, url]) => (
            <li key={url} className={`relative m-4 text-white text-center`}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
