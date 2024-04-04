'use client'
import styles from './navBar.module.scss'

import Link from "next/link"

export default function NavBarMenu ({isMenuOpen , setIsMenuOpen}) {
    return (
        <div 
        onClick={(e)=>{if(e.target === e.currentTarget) setIsMenuOpen(false)}}
        className={`
            ${isMenuOpen ? 'left-0 no-doc-scroll' : 'left-[-100%]'}
            w-full h-full fixed top-0 z-10 transition-all
            bg-[rgba(0,0,0,0.5)] 
            flex sm:hidden
        `}>

            {/* Content */}
            <div className="w-full h-full bg-primary">

                {/* Nav menu */}
                <div className="w-full h-[80px] flex justify-between items-center box-border px-[7.5vw]">
                    {/* Logo */}
                    <h2 className="relative h-full flex flex-col justify-center items-center text-2xl font-bold">
                        Cristian.dev
                    </h2>


                    <button onClick={()=>setIsMenuOpen(current=>!current)}
                    className="relative w-[32px] h-[24px] p-0 bg-transparent hover:bg-transparent">

                        <div className="w-full h-[2px] absolute top-0 left-0 bg-secondary rounded"></div>
                        <div className="w-full h-[2px] absolute left-0 bg-secondary rounded"></div>
                        <div className="w-full h-[2px] absolute bottom-0 left-0 bg-secondary rounded"></div>
                    </button>
                </div>

                {/* Links */}
                <div className=" box-border text-2xl
                flex flex-col justify-center bg-primary
                ">   
                    <Link href='#home' className={styles.navBarMenuLink}>Home</Link>
                    <Link href='#about' className={styles.navBarMenuLink}>About</Link>
                    <Link href='#projects' className={styles.navBarMenuLink}>Projects</Link>
                    <Link href='#contact' className={`${styles.navBarMenuLink} !border-0`}>Contact</Link>
                </div>

            </div>

        </div>
    )
}