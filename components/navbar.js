import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export function Navbar() {
  let show = true;
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={`flex flex-col w-10 h-6 z-[101] fixed right-5 items-end top-10`}
      >
        <div className="w-full h-1 mb-1 bg-white"></div>
        <div className="w-6 h-1 mb-1 bg-white"></div>
        <div className="w-full h-1 bg-white"></div>
      </div>
      <nav
        className={`w-20 h-screen flex fixed z-[100] bg-gray-900 bottom-0 right-0 transition-transform ease-in-out ${
          showMenu ? "translate-x-full" : ""
        }`}
      >
        <ul className="flex flex-col h-screen w-full justify-center right-0">
          {[
            ["Hjem", "/"],
            ["Blog", "/blog"],
            ["Kontakt", "/kontakt"],
            ["Om os", "/om-os"],
          ].map(([title, url], num) => (
            <li
              key={num}
              className={`relative m-4 text-white text-center after:absolute after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-violet-500 after:left-0 after:bottom-0 after:w-0 after:transition-all after:rounded-xl after:ease-in-out ${
                router.pathname == url ? "after:w-full" : ""
              }`}
            >
              <Link href={url} className="">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
