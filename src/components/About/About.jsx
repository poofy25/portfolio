
import Image from "next/image"

import AboutImg from '/public/imgs/about.webp'

export default function AboutSection () {
    return (
        <div id="about" className="flex flex-col items-center py-32 px-[7.5vw] box-border bg-primary-light w-full
        lg:px-[17.5vw]
        ">
            <div className="flex flex-col items-center
                lg:flex-row lg:gap-16 max-w-[1024px]
                ">
                <div className="relative w-[clamp(200px,100%,410px)] aspect-[14/10] rounded-2xl overflow-hidden mb-8
                lg:m-0 lg:aspect-[14/10] lg:w-[clamp(200px,50%,410px)]
                ">
                    <Image src={AboutImg} alt="About Image" className="w-full h-full object-cover" height='500' width='700'/>
                </div>
                <div className="flex flex-col justify-center items-center flex-1 lg:items-start">
                    <p className=" font-semibold text-lg text-complimentary pb-2">ABOUT ME</p>
                    <h2 className="text-2xl font-bold text-center mb-4 lg:text-start">Web Developer based in Moldova 📍</h2>
                    <p className="text-center text-base opacity-75 mb-4 lg:text-start">Hey, my name is Buza Cristian, and I&apos;m a Web Developer. My passion is to create and develop a clean and complex web apps for my users.</p>
                    <p className="text-center text-base opacity-75 lg:text-start">My main stack currently is React/Next.js in combination with Tailwind CSS and MongoDB.</p>
                </div>
            </div>
        </div>
    )
}