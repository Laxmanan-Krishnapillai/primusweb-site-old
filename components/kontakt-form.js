import React from "react";
import Link from 'next/link'    
import { useState } from "react";

/**
 * Kontaktform component, connected with Getforms
 * @returns 
 */
export function Form() {
    return(
        <form target="_blank" id="kontakt" action="https://getform.io/f/47cde4c7-e57a-403e-971b-aaa0e5134a25" method="POST" className="grid grid-rows-4 grid-cols-2 px-10 gap-4 max-w-md m-auto border-pink-500">
            <input placeholder="Fornavn" className="rounded-sm shadow-md px-4 text-gray-600 border-inherit border-2 " type="text" id="fname" name="first_name" required/>
            <input placeholder="Efternavn" className="rounded-sm shadow-md px-4 text-gray-600 border-inherit border-2" type="text" id="lname" name="last_name" required/>
            <input placeholder="E-mail" className="rounded-sm shadow-md col-span-2 px-4 text-gray-600 border-inherit border-2" type="email" id="email" name="email" required/>
            <input placeholder="Besked" className="rounded-sm shadow-md col-span-2 px-4 text-gray-600 border-inherit border-2" type="text" id="message" name="message" required/>
            <button className="cursor-pointer rounded-md px-4 py-2 lg:px-10 lg:text-2xl lg:py-4 uppercase bg-gradient-to-r from-pink-500 to-violet-500 font-black text-white col-span-2" type="submit">Send</button>
        </form>
    )
}