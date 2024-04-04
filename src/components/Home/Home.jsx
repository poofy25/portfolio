import './home.scss'

import Image from "next/image"
import Link from "next/link"

import HeroImage from '/public/imgs/hero.png'
import LinkedInSvg from '/public/svgs/linkedin.svg'
import GithubSvg from '/public/svgs/github.svg'

export default function HeroComponent () {
    return (
        <article className="bg-transparent w-full min-h-[calc(100vh-80px)] flex flex-col py-8 px-[7.5vw] sm:py-[80px] sm:px-[17.5vw] box-border"> 
            <div className="flex flex-col-reverse items-center justify-center 
            sm:flex-row sm:items-start sm:gap-16
            ">
                <div className="flex flex-col items-center gap-4 flex-1 pt-8 sm:gap-6 sm:py-10 sm:items-start">
                    <h1 className="font-bold text-4xl text-center sm:text-left sm:text-5xl">Front-End React Developer</h1>
                    <p className="text-lg text-center sm:text-left opacity-90">Hi, I'm Buza Cristian. A passionate Front-end React Developer based Moldova. 📍</p>
                    <div className="flex gap-4">
                        <Link href=''><Image src={LinkedInSvg} width='32' height='32'/></Link>
                        <Link href=''><Image src={GithubSvg} width='32' height='32'/></Link>
                    </div>  
                </div>

                <div className="w-[85%] sm:w-[40%] aspect-square relative overflow-hidden heroImg">
                    <Image src={HeroImage} fill={true}/>
                </div>
            </div>

            <div>
            </div>
        </article>
    )
}