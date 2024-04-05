
import Image from "next/image"

import AboutImg from '/public/imgs/about.jpg'

export default function AboutSection () {
    return (
        <div className="flex flex-col items-center py-16 px-[7.5vw] box-border bg-primary-light w-full
        md:px-[15vw]
        ">
            <div className="flex flex-col items-center
                md:flex-row md:gap-16 max-w-[900px]
                ">
                <div className="relative w-[clamp(200px,100%,410px)] aspect-[14/10] rounded-2xl overflow-hidden mb-8
                md:m-0 md:aspect-[14/12] md:w-[clamp(200px,40%,410px)]
                ">
                    <Image src={AboutImg} className="w-full h-full object-cover" height='350' width='400'/>
                </div>
                <div className="flex flex-col justify-center items-center flex-1 md:items-start">
                    <h3 className="text-lg text-complimentary font-bold pb-4 ">ABOUT ME</h3>
                    <h2 className="text-2xl font-bold text-center mb-4 md:text-start">Front-end Developer based in Moldova 📍</h2>
                    <p className="text-center text-base opacity-75 mb-4 md:text-start">Hey, my name is Buza Cristian, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
                    <p className="text-center text-base opacity-75 md:text-start">My main stack currently is React/Next.js in combination with Tailwind CSS and MongoDB.</p>
                </div>
            </div>
        </div>
    )
}