'use client'
import styles from './navBar.module.scss'

import { useState } from "react"

import Link from "next/link"

import NavBarMenu from './NavBarMenu'

export default function Navbar () {

    const [isMenuOpen , setIsMenuOpen] = useState(false)


    return (
        <nav className="
        flex flex-row items-center w-full h-[80px] bg-primary overflow-hidden px-[7.5vw]
        relative justify-between box-border shadow-lg
        "
        >


            {/* Navbar menu */}
            <NavBarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            


            {/* Logo */}
            <h2 className="relative h-full flex flex-col justify-center items-center text-2xl font-bold">
                Cristian.dev
            </h2>

            {/* Nav buttons */}
            <div className="hidden ml-auto gap-8 [&_*]:py-4 sm:flex font-bold">
                <Link className='font-bold' href='#home'>Home</Link>
                <Link href='#about'>About</Link>
                <Link href='#projects'>Projects</Link>
                <Link href='#contact'>Contact</Link>
            </div>

            {/* Hamburger button */}
            <div className="relative h-full flex flex-col justify-center items-center sm:hidden ">
                <button onClick={()=>setIsMenuOpen(current=>!current)}
                className="relative w-[32px] h-[24px] p-0 bg-transparent hover:bg-transparent">
                    <div className="w-full h-[2px] absolute top-0 left-0 bg-secondary rounded"></div>
                    <div className="w-full h-[2px] absolute left-0 bg-secondary rounded"></div>
                    <div className="w-full h-[2px] absolute bottom-0 left-0 bg-secondary rounded"></div>
                </button>
            </div>

        </nav>
    )
}