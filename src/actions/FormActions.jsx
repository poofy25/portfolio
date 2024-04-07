'use server'

export async function handleSendMessage (formData) {
try {
    const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN

    const message = `| Email: ${formData.get('email')} %0A| Name: ${formData.get('name')} %0A| Message: ${formData.get('message')} %0A`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}'&text=${message}`;

    const response = await fetch(url)

    console.log(response.ok)

    if(response.ok) return true
    if(!response.ok) return false

} catch (error) {
    console.log(error)
    return false
}
    
}