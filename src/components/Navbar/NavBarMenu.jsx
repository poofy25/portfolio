'use client'
import styles from './navBar.module.scss'

import Link from "next/link"

export default function NavBarMenu ({isMenuOpen , setIsMenuOpen}) {
    return (
        <div 
        onClick={(e)=>{if(e.target === e.currentTarget) setIsMenuOpen(false)}}
        className={`
            ${isMenuOpen ? ' top-[80px] no-doc-scroll' : 'top-[-100%]'}
            w-full h-full fixed  transition-all left-0 z-10
            bg-[rgba(0,0,0,0.5)] 
            flex sm:hidden
        `}>

            {/* Content */}
            <div className="w-full h-full bg-secondary">

                

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