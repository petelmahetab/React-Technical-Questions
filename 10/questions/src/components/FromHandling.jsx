import React, { useState } from 'react'

const FromHandling = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleForm=(e)=>{
        e.preventDefault();
        if(!email) 
        return setError('Email is Required')

        setError('');
        alert('Form Submitted...')
    }
  return (
    <div>
        <form onSubmit={handleForm}>
         <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <button type='submit'>Submit</button>
         {error ?<p style={{color:'red'}}>{error}</p>:<p>No Error</p>}
        </form>
    </div>
  )
}

export default FromHandling