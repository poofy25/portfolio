'use server'

export async function handleSendMessage (formData) {
try {
    console.log('debugging')
    const chat_id = process.env.TELEGRAM_CHAT_ID
    const token = process.env.TELEGRAM_BOT_TOKEN

    const message = `| Email: ${formData.get('email')} %0A| Name: ${formData.get('name')} %0A| Message: ${formData.get('message')} %0A`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}'&text=${message}`;

    const response = await fetch(url)
    const dataResponse = await response.json()
    console.log(response)
    console.log(dataResponse)


    console.log(response.ok)

    if(response.ok) return true
    if(!response.ok) return false

} catch (error) {
    console.log(error)
    return false
}
    
}