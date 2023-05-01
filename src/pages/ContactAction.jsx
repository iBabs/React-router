import { redirect } from "react-router-dom"

export const contactData = async({request}) =>{
    console.log(request)
    
    const data = await request.formData()

    const submission ={
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(submission)
    return redirect('/')
} 