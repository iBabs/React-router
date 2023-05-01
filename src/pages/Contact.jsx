import React from 'react'
import { Form } from 'react-router-dom'

function Contacts() {
  return (
    <div > 
        <Form method='post' action='/help/contacts' className='space-y-5 '>
            <div className='space-y-2 '>
                <label htmlFor='name'>
                    Name
                </label><br/>
                <input name='name' type='text' className='shadow-md' required/>
            </div>
            <div>
                <label htmlFor='email'>
                    email
                </label><br/>
                <input name='email' type='email' className='shadow-md' required/>
            </div>
            <div className='space-y-2 ' >
                <label htmlFor='message'>
                    Message
                </label> <br/>
                <textarea name='message' rows="4" cols="50" maxLength="200" className='rounded-md shadow-lg' required/>
            </div>
            <div>
                <input type='submit' value="SEND" className='shadow-md hover:shadow-lg p-3 font-mono 
                hover:cursor-pointer hover:scale-105 bg-slate-300 rounded-lg'/>
            </div>
        </Form>
    </div>
  )
}

export default Contacts

