import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <div  className='display-flex' >
            <div className='form-container'>
                <form >
                    <div className='login-form-frame'> 
                        <h1>SING UP</h1>
                        <div className='text-name'>
                            <input type='text' placeholder="Name" />
                        </div>
                        <div className='email'>
                            <input type='email' placeholder="Email Adress" />
                        </div>
                        <div className='password'>
                            <input type='password' placeholder="Password" />
                        </div>
                        <div className='password'>
                            <input type='password' placeholder="Confirm Password" />
                        </div>    
                        <button type='submit' > REGISTER </button>
                    </div>
                    <div className='register-form-frame'>
                         <div className='register'>
                             <p>Have an Account?</p> 
                             <Link to={'/'}>
                             <button type='button'>LOG IN</button>
                             </Link>
                         </div>  
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen
