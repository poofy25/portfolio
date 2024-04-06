import './home.scss'

import Image from "next/image"
import Link from "next/link"

import HeroImage from '/public/imgs/hero.png'
import LinkedInSvg from '/public/svgs/linkedin.svg'
import GithubSvg from '/public/svgs/github.svg'

import HtmlSvg from '/public/svgs/htmlicon.svg'
import CssSvg from '/public/svgs/cssicon.svg'
import JsSvg from '/public/svgs/jsicon.svg'
import TypeScriptSvg from '/public/svgs/typescripticon.svg'
import ReactSvg from '/public/svgs/reacticon.svg'
import NextSvg from '/public/svgs/nextjsicon.svg'
import NodeJsSvg from '/public/svgs/nodejsicon.svg'
import SassSvg from '/public/svgs/sassicon.svg'
import TailwindSvg from '/public/svgs/tailwindicon.svg'
import MongoSvg from '/public/svgs/mongoicon.svg'

export default function HeroComponent () {
    return (
        <article id='home' className="bg-transparent w-full min-h-[calc(100vh-80px)] gap-8 flex flex-col justify-between py-8 pb-16 px-[7.5vw] sm:py-[80px] sm:pb-32 sm:px-[17.5vw] box-border"> 
            <div className="flex flex-col-reverse items-center justify-center 
            sm:flex-row sm:items-start sm:gap-16
            ">
                <div className="flex flex-col items-center gap-4 flex-1 pt-8 sm:gap-6 sm:py-10 sm:items-start">
                    <h1 className="font-bold text-4xl text-center sm:text-left sm:text-5xl inline">Buza Cristian <br/>Web Developer</h1> 
                    <p className="text-lg text-center sm:text-left opacity-90">Hi, I&apos;m Buza Cristian. A passionate React Web Developer based in Moldova. 📍</p>
                    <div className="flex gap-2 flex-col items-start w-fit flex-wrap
                    sm:flex-row sm:w-full sm:gap-4
                    ">
                        <Link title='Contact Me' className='text-primary shadow-lg font-bold px-6 py-3 rounded-lg bg-secondary w-fit border-2 border-solid border-secondary box-border
                        hover:bg-primary hover:text-textPrimary transition-all
                        ' href='#contact'>Contact me</Link>
                        <div className='flex gap-2 justify-evenly w-full sm:w-fit'>
                            <Link title='LinkedIn' className=' hover:bg-secondary transition-all heroLink shadow-lg
                            flex justify-center px-2 rounded-lg py-2 bg-primary flex-1 border-2 border-solid border-secondary box-border' href='https://md.linkedin.com/in/buza-cristian-3006b8266' target='_blank'><Image className='invert' alt='LinkedIn Icon' src={LinkedInSvg} width='32' height='32'/></Link>
                            <Link title='Github' className='hover:bg-secondary transition-all heroLink shadow-lg
                            flex justify-center px-2 rounded-lg py-2 bg-primary flex-1 border-2 border-solid border-secondary box-border' href='https://github.com/poofy25' target="_blank"><Image className='invert' alt='Github Icon' src={GithubSvg} width='32' height='32'/></Link>
                        </div>
                    </div>  
                </div>

                <div className="w-[85%] sm:w-[40%] max-w-[350px]  aspect-square relative heroImg">
                    <Image src={HeroImage} alt='Hero Image' className='shadow-2xl' fill={true}/>
                </div>
            </div>

            <div className='flex flex-col items-center gap-4 h-fit sm:flex-row sm:gap-6'>
                <p className='font-bold text-lg  border-0 border-b-2 border-solid border-secondary sm:border-0'>Skills</p>
                <span className='hidden sm:flex w-[2px] h-8 bg-secondary rounded opacity-75'></span>
                <div className='flex items-center gap-4 flex-wrap justify-center sm:justify-start'>
                    <div className='flex gap-2'>
                        <div className='skill'><Image alt='Skill icon' src={HtmlSvg} width='48' height='48'/><p>HTML</p></div>
                        <div className='skill'><Image alt='Skill icon' src={CssSvg} width='48' height='48'/><p>CSS</p></div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='skill'><Image alt='Skill icon' src={JsSvg} width='48' height='48'/><p>JavaScript</p></div>
                        <div className='skill'><Image alt='Skill icon' src={TypeScriptSvg} width='48' height='48'/><p>TypeScript</p></div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='skill'><Image alt='Skill icon' src={NodeJsSvg} width='48' height='48'/><p>NodeJs</p></div>
                        <div className='skill'><Image alt='Skill icon' src={MongoSvg} width='48' height='48'/><p>MongoDB</p></div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='skill'><Image alt='Skill icon' src={ReactSvg} width='48' height='48'/><p>React</p></div>
                        <div className='skill'><Image alt='Skill icon' src={NextSvg} width='48' height='48'/><p>NextJs</p></div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='skill'><Image alt='Skill icon' src={TailwindSvg} width='48' height='48'/><p>Tailwind</p></div>
                        <div className='skill'><Image alt='Skill icon' src={SassSvg} width='48' height='48'/><p>Sass</p></div>
                    </div>

                </div>
            </div>
        </article>
    )
}