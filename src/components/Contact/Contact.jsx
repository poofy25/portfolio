import './contact.scss'

import Image from "next/image"
import Link from "next/link"

import MailSVG from '/public/svgs/mail.svg'
import LinkedInSVG from '/public/svgs/linkedin.svg'
import FacebookSVG from '/public/svgs/facebook.svg'
import InstagramSVG from '/public/svgs/instagram.svg'
import GitHubSVG from '/public/svgs/github.svg'

import ContactForm from './ContactForm'


export default function ContactSection () {
    return (
        <div id='contact' className="flex flex-col items-center bg-primary-light px-[7.5vw] py-32 box-border w-full lg:px-[17.5vw] lg:items-start">
            <p className="font-semibold text-lg text-complimentary">CONTACT</p>
            <div className="flex flex-col justify-between  gap-8 w-full h-fit lg:flex-row lg:gap-16">
                <div className="flex-1 flex flex-col items-center lg:items-start">
                    <h2 className='mb-8 mt-4 text-center lg:text-start'>Don&apos;t be shy! Hit me up! 👇</h2> 
                    <h3 className=' mb-2 sm:hidden'>EMAIL</h3>
                    <Link title='Email' className="hover:text-complimentary transition-all sm:hidden" href='mailto:buzacristian25@gmail.com'>buzacristian25@gmail.com</Link>


                    <div className="flex items-center h-fit w-full gap-2 mb-4 justify-center lg:justify-start">
                        <Link title='Email' href='mailto:buzacristian25@gmail.com' className="hidden sm:flex bg-secondary rounded-full shadow-xl w-fit  p-2 border-2 border-solid border-secondary hover:bg-primary-light transition-all">
                            <Image className="blackToComply" alt='Mail Icon'  src={MailSVG} width='28' height='28'/>
                        </Link>
                        <div className="flex flex-col hidden sm:flex">
                            <h3>EMAIL</h3>
                            <Link title='Email' className="hover:text-complimentary transition-all" href='mailto:buzacristian25@gmail.com'>buzacristian25@gmail.com</Link>
                        </div>
                    </div>

                    <h3 className="mb-2">SOCIALS</h3>
                    <div className="flex gap-4 items-start">
                        <div className="flex items-center h-fit gap-2 ">
                            <Link title='LinkedIn' href='https://md.linkedin.com/in/buza-cristian-3006b8266' target="_blank" className="bg-secondary rounded-full shadow-xl w-fit h-full p-2 border-2 border-solid border-secondary hover:bg-primary-light transition-all">
                                <Image className="blackToComply" alt='LinkedIn Icon'  src={LinkedInSVG} width='28' height='28'/>
                            </Link>
                        </div>
                        <div className="flex items-center h-fit gap-2">
                            <Link title='Github' href='https://github.com/poofy25' target="_blank" className="bg-secondary rounded-full shadow-xl w-fit h-full p-2 border-2 border-solid border-secondary hover:bg-primary-light transition-all">
                                <Image className="blackToComply" alt='Github Icon'  src={GitHubSVG} width='28' height='28'/>
                            </Link>
                        </div>
                        <div className="flex items-center h-fit gap-2">
                            <Link title='Facebook' href='https://www.facebook.com/buzacristian25/' target="_blank" className="bg-secondary rounded-full shadow-xl w-fit h-full p-2 border-2 border-solid border-secondary hover:bg-primary-light transition-all">
                                <Image className="blackToComply" alt='Facebook Icon'  src={FacebookSVG} width='28' height='28'/>
                            </Link>
                        </div>
                        <div className="flex items-center h-fit gap-2">
                            <Link title='Instagram' href='https://www.instagram.com/buzacristian25/' target="_blank" className="bg-secondary rounded-full shadow-xl w-fit h-full p-2 border-2 border-solid border-secondary hover:bg-primary-light transition-all">
                                <Image className="blackToComply" alt='Instagram Icon'  src={InstagramSVG} width='28' height='28'/>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-1 flex flex-col ">
                    <h2 className='flex-1 mb-8 text-center lg:mt-4 lg:text-start'>Or leave me a message! 💬</h2>
                    <ContactForm/>
                    


                </div>
            </div>
        </div>
    )
}