import React from 'react'

function Contacts() {
  return (
    <div >
        <formm className='space-y-5 '>
            <div className='space-y-2 '>
                <label for='name'>
                    Name
                </label><br/>
                <input name='name' type='text' className='shadow-md' required/>
            </div>
            <div>
                <label for='email'>
                    email
                </label><br/>
                <input name='email' type='text' className='shadow-md' required/>
            </div>
            <div className='space-y-2 ' >
                <label form='message'>
                    Message
                </label> <br/>
                <textarea name='message' rows="4" cols="50" maxlength="200" className='rounded-md shadow-lg' required/>
            </div>
            <div>
                <input type='submit' value="SEND" className='shadow-md hover:shadow-lg p-3 font-mono 
                hover:cursor-pointer hover:scale-105 bg-slate-300 rounded-lg'/>
            </div>
        </formm>
    </div>
  )
}

export default Contacts