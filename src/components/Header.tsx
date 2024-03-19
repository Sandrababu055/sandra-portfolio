import React from "react";

import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "./Bounded";
import NavBar from "@/components/NavBar";

export default async function Header() {
    const client = createClient(); 
    const settings = await client.getSingle("settings"); 

    return(
        <Bounded>
        <header className = "top-0 z-50 max-auto max-w-7xl md:sticky md:top-4">
            <NavBar settings={settings} />
        </header>
        </Bounded>
    )

}