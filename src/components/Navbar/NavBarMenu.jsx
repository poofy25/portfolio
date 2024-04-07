'use client'
import styles from './navBar.module.scss'

import Link from "next/link"

export default function NavBarMenu ({isMenuOpen , setIsMenuOpen}) {
    return (
        <div 
        onClick={(e)=>{if(e.target === e.currentTarget) setIsMenuOpen(false)}}
        // style={{transition:'3s ease-in-out'}}
        className={`
            ${isMenuOpen ? ' top-[0px] no-doc-scroll h-full' : 'top-0 h-0'}
            w-full h-full fixed  transition-all transition-[all 5000ms] left-0 z-10 overflow-hidden
            bg-[rgba(0,0,0,0.5)] 
            flex lg:hidden
        `}>

            {/* Content */}
            <div className="w-full h-full bg-primary z-10">

                <div className='px-[7.5vw] box-border w-full h-[80px] bg-primary flex items-center justify-between'>
                    {/* Logo */}
                    <Link onClick={()=>setIsMenuOpen(false)}  href='#home' className="relative text-xl font-bold">
                        Buza Cristian
                    </Link>

                    {/* Hamburger button */}
                    <div className="relative h-full flex flex-col justify-center items-center lg:hidden ">
                        <button onClick={()=>setIsMenuOpen(current=>!current)} title="Menu Button"
                        className="relative w-[30px] h-[22px] p-0 bg-transparent hover:bg-transparent">
                            <div className="w-full h-[3px] absolute top-0 left-0 bg-secondary rounded rotate-45 translate-y-[10px]"></div>
                            {/* <div className="w-full h-[3px] translate-y-[-50%] absolute left-0 bg-secondary rounded"></div> */}
                            <div className="w-full h-[3px] absolute bottom-0 left-0 bg-secondary rounded -rotate-45 translate-y-[-9px]"></div>
                        </button>
                    </div>
                </div>

                {/* Links */}
                <div className=" box-border text-2xl items-start
                flex flex-col justify-center bg-primary px-[7.5vw]
                ">   
                    <Link onClick={()=>setIsMenuOpen(false)} title='Home' href='#home' className={styles.navBarMenuLink}># Home</Link>
                    <Link onClick={()=>setIsMenuOpen(false)} title='About' href='#about' className={styles.navBarMenuLink}># About</Link>
                    <Link onClick={()=>setIsMenuOpen(false)} title='Projects' href='#projects' className={styles.navBarMenuLink}># Projects</Link>
                    <Link onClick={()=>setIsMenuOpen(false)} title='Contact' href='#contact' className={`${styles.navBarMenuLink} !border-0`}># Contact</Link>
                </div>

            </div>

        </div>
    )
}