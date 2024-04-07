
import LinkedInSvg from '/public/svgs/linkedin.svg'
import GithubSvg from '/public/svgs/github.svg'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer () {
    return (
        <footer className="py-8 flex flex-col gap-4 justify-between w-full px-[7.5vw] box-border md:px-[15vw] md:flex-row md:gap-0 items-center">
            <p className='font-semibold text-center'>Buza Cristian © 2024. All rights are reserved</p>
            <div className='flex gap-2 justify-center w-full sm:w-fit md:justify-evenly'>
                <Link title='LinkedIn' className=' hover:bg-secondary transition-all heroLink shadow-lg
                flex justify-center px-2 rounded-lg py-2 bg-primary border-2 border-solid border-secondary box-border' href='https://md.linkedin.com/in/buza-cristian-3006b8266' target='_blank'><Image alt='LinkedIn Icon' className='invert' src={LinkedInSvg} width='32' height='32'/></Link>
                <Link title='Github' className='hover:bg-secondary transition-all heroLink shadow-lg
                flex justify-center px-2 rounded-lg py-2 bg-primary  border-2 border-solid border-secondary box-border' href='https://github.com/poofy25' target="_blank"><Image alt='Github Icon' className='invert' src={GithubSvg} width='32' height='32'/></Link>
            </div>
        </footer>
    )
}