'use server'

export async function handleSendMessage (formData) {

    console.log(formData.get('email'))
    return 'hopa'
}