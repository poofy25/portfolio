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
        relative justify-between box-border shadow-lg z-20
        "
        >


            {/* Navbar menu */}
            <NavBarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            


            {/* Logo */}
            <Link title='Home' href='#home' className="relative h-full flex flex-col justify-center items-center text-xl font-bold">
                Buza Cristian
            </Link>

            {/* Nav buttons */}
            <div className="hidden ml-auto gap-8 [&_*]:py-4 sm:flex font-bold">
                <Link title='Home' className='font-bold' href='#home'>Home</Link>
                <Link title='About' href='#about'>About</Link>
                <Link title='Projects' href='#projects'>Projects</Link>
                <Link title='Contract' href='#contact'>Contact</Link>
            </div>

            {/* Hamburger button */}
            <div className="relative h-full flex flex-col justify-center items-center sm:hidden ">
                <button onClick={()=>setIsMenuOpen(current=>!current)} title="Menu Button"
                className="relative w-[30px] h-[22px] p-0 bg-transparent hover:bg-transparent">
                    <div className="w-full h-[3px] absolute top-0 left-0 bg-secondary rounded"></div>
                    <div className="w-full h-[3px] translate-y-[-50%] absolute left-0 bg-secondary rounded"></div>
                    <div className="w-full h-[3px] absolute bottom-0 left-0 bg-secondary rounded"></div>
                </button>
            </div>

        </nav>
    )
}