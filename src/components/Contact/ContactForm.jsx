'use client'

import { handleSendMessage } from "@/actions/FormActions"

import { useState } from "react"

import { useEffect } from 'react'

import 'aos/dist/aos.css';

import AOS from 'aos';


export default function ContactForm () {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError(null)
        setSuccess(null)

        const formData = new FormData()
        formData.append("name" , name)
        formData.append("email" , email)
        formData.append("message" , message)

        const response = await handleSendMessage(formData)

        if(response === true) {
            setError(null)
            setSuccess('Message sent successfuly')
            setName('')
            setEmail('')
            setMessage('')
        }

        if(response === false){
            setError('There was an error while sending the message')
            setSuccess(null)
        }

        setLoading(false)


    }

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Animation only once
        });
      }, []);

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-1 flex-col gap-2 ">
                        <div className="flex flex-col">
                            <label data-aos="fade-down" data-aos-delay="100" >Name <span>*</span></label>
                            <input data-aos="fade-down" data-aos-delay="100" minLength={2} onChange={(e)=>setName(e.target.value)} value={name}  name="name" required placeholder='Your name' type="text"/>
                        </div>

                        <div className="flex flex-col">
                            <label data-aos="fade-down" data-aos-delay="100">Email <span>*</span></label>
                            <input data-aos="fade-down" data-aos-delay="100" minLength={5} onChange={(e)=>setEmail(e.target.value)} value={email} name="email" required placeholder='Your email' type="email"/>
                        </div>

                        <div className="flex flex-col">
                            <label data-aos="fade-down" data-aos-delay="100">Message <span>*</span></label>
                            <textarea data-aos="fade-down" data-aos-delay="100" minLength={10} onChange={(e)=>setMessage(e.target.value)} value={message} name="message" required placeholder='Your message' type="text"/>
                        </div>

                        <button data-aos="fade-up" disabled={loading}>{loading ? 'Sending message...' : 'Send message'}</button>

                        {error !== null ? <div className='w-full text-sm bg-red-500 text-secondary font-semibold flex items-center justify-center py-3 rounded border-2 border-solid border-red-500 text-center'>{error}</div> : ''}
                        {success !== null  ? <div className='w-full text-sm bg-green-500 text-secondary font-semibold flex items-center justify-center py-3 rounded border-2 border-solid border-green-500 text-center'>{success}</div> : ''}

        </form>
    )
}
