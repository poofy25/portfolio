import './projects.scss'

import Image from "next/image"
import Link from "next/link"

import GenAsigProject from '/public/imgs/genasig-project.png'
import LKWAleksProject from '/public/imgs/lkwaleks-project.png'
import RestaurantProject from '/public/imgs/restaurant-project.png'


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

import OpenUrlSvg from '/public/svgs/web.svg'
import GithubUrlSvg from '/public/svgs/github.svg'

export default function ProjectsSection () {
    return (
        <div className="flex flex-col items-center px-[7.5vw] py-32 box-border w-full md:px-[17.5vw] md:items-start">

            <h3 className='text-complimentary mb-2'>PROJECTS</h3>
            <h2 className='mb-8 text-center md:text-start'>Each project is an unique step to success 🎯 </h2>

            <div className="flex gap-8 mb-16 items-center relative w-full flex-col md:flex-row md:gap-16">
                <div className="aspect-[14/10] w-[clamp(200px,100%,600px)] rounded-lg relative overflow-hidden md:w-[clamp(200px,50%,600px)]">
                    <Image className="w-full h-full object-cover object-top" src={RestaurantProject} width='1200' height='1200'/>
                </div>
                <div className="flex flex-col gap-4 flex-1 items-center justify-center">
                    <h3 className='text-center'>Full-Stack Restaurant Web App 🍽️ <br/> (In Works) </h3>
                    <p className="opacity-75 mb-2 text-center">A Full-Stack restaurant web app where users can add items to cart and place an order at checkout. It also features an Admin Panel where the admins can manage the menu and view and manage Real-Time orders.</p>
                    <div className="flex flex-wrap gap-2">
                        <div className='skill'><Image src={ReactSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={NextSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={MongoSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={TailwindSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={SassSvg} width='48' height='48'/></div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Link href='https://github.com/poofy25/Restaurant_WebApp' target='_blank' className="w-[116px] projectBtn px-2 py-2 border-2 border-solid border-secondary rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:text-primary hover:bg-secondary transition-all">Code <Image className="invert" src={GithubUrlSvg} width='32' height='32'/></Link>
                        <Link href='https://restaurant-app-poofy25.vercel.app/'  target='_blank' className="w-[116px] projectBtn px-2 py-2 border-2 border-solid border-secondary rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:text-primary hover:bg-secondary transition-all">Live url <Image className="invert" src={OpenUrlSvg} width='32' height='32'/></Link>
                    </div>
                </div>
            </div>

            <div className="flex gap-8 mb-16 items-center relative w-full flex-col md:flex-row md:gap-16">
                <div className="aspect-[14/10] w-[clamp(200px,100%,600px)] rounded-lg relative overflow-hidden md:w-[clamp(200px,50%,600px)]">
                    <Image className="w-full h-full object-cover object-top" src={GenAsigProject} width='1200' height='1200'/>
                </div>
                <div className="flex flex-col gap-4 flex-1 items-center justify-center">
                    <h3>Insurance Landing Page 🔐</h3>
                    <p className="opacity-75 mb-2 text-center">An insurance website that allows users to select an insurance and check details about the insurance. The website also allows to send a contact form through the use of a Telegram bot.</p>
                    <div className="flex flex-wrap gap-2">
                        <div className='skill'><Image src={ReactSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={NextSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={SassSvg} width='48' height='48'/></div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Link href='https://github.com/poofy25/GenAsig' target='_blank' className="w-[116px] projectBtn px-2 py-2 border-2 border-solid border-secondary rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:text-primary hover:bg-secondary transition-all">Code <Image className="invert" src={GithubUrlSvg} width='32' height='32'/></Link>
                        <Link href='https://genasig.md/' target='_blank' className="w-[116px] projectBtn px-2 py-2 border-2 border-solid border-secondary rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:text-primary hover:bg-secondary transition-all">Live url <Image className="invert" src={OpenUrlSvg} width='32' height='32'/></Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 mb-16 items-center relative w-full flex-col md:flex-row-reverse md:gap-16">
                <div className="aspect-[14/10] w-[clamp(200px,100%,600px)] rounded-lg relative overflow-hidden md:w-[clamp(200px,50%,600px)]">
                    <Image className="w-full h-full object-cover object-top" src={LKWAleksProject} width='1200' height='1200'/>
                </div>
                <div className="flex flex-col gap-4 flex-1 items-center justify-center">
                    <h3>Logistics Landing Page 📦</h3>
                    <p className="opacity-75 mb-2 text-center">A logistics landing page that shows the businesses services, testimonials and FAQ. It also features an easy multiple language swicher and interactive navigation bar.  </p>
                    <div className="flex flex-wrap gap-2">
                        <div className='skill'><Image src={ReactSvg} width='48' height='48'/></div>
                        <div className='skill'><Image src={CssSvg} width='48' height='48'/></div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <Link href='https://github.com/poofy25/lkw-aleks' target='_blank' className="w-[116px] projectBtn px-2 py-2 border-2 border-solid border-secondary rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:text-primary hover:bg-secondary transition-all">Code <Image className="invert" src={GithubUrlSvg} width='32' height='32'/></Link>
                        <Link href='https://lkw-aleks.com/' target='_blank' className="w-[116px] projectBtn px-2 py-2 border-2 border-solid border-secondary rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:text-primary hover:bg-secondary transition-all">Live url <Image className="invert" src={OpenUrlSvg} width='32' height='32'/></Link>
                    </div>
                </div>
            </div>
            
            
            
            
        </div>
    )
}