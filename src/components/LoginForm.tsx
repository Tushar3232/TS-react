import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail]= useState<string>("")
    const [pass, setPass]= useState<string>("")

    const handelEmail =(e: React.ChangeEvent<HTMLInputElement>)=>{
       setEmail(e.target.value) 
    }
    const handelPass = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPass(e.target.value)
    }

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        alert(`hi ${email}`)
        console.log({email, pass})

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className=' border' type='email' name='email' id='email' value={email} onChange={handelEmail}  />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className=' border' type='password' name='password' id='password' value={pass} onChange={handelPass}  />
                </div>

                <button type='submit' className='border'>Login</button>
            </form>
        </>
    );
};

export default LoginForm;