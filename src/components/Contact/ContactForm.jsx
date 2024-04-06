'use client'

import { handleSendMessage } from "@/actions/FormActions"

import { useState } from "react"

export default function ContactForm () {

    const [status , setStatus] = useState(null)

    const handleFormSubmit = async (formData) => {
        setStatus('loading')

        const reponse = await handleSendMessage(formData)
        setStatus(null)
    }

    return (
        <form action={handleFormSubmit} className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <label>Name <span>*</span></label>
                            <input name="name" required placeholder='Your name' type="text"/>
                        </div>

                        <div className="flex flex-col">
                            <label>Email <span>*</span></label>
                            <input name="email" required placeholder='Your email' type="email"/>
                        </div>

                        <div className="flex flex-col">
                            <label >Message <span>*</span></label>
                            <textarea name="message" required placeholder='Your message' type="text"/>
                        </div>

                        <button type="submit"> Send Message</button>
        </form>
    )
}