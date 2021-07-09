import React, { useEffect, useState } from 'react'
import '../screens/LoginScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

import { Link } from 'react-router-dom'

const LoginScreen = ({location, history}) =>  {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=> {
        if(userInfo) {
            history.push(redirect)
        }
    },[history, userInfo, redirect])
 
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email,password))
    }

    return (
        <div  className='display-flex' >
            <div className='form-container'>
                <form onSubmit={submitHandler} >
                   {error && <Message variant='danger'>{error}</Message>}
                   {loading && <Loader/>}
                    <div className='login-form-frame'> 
                        <h1>LOG IN</h1>
                        <div className='email'>
                            {/* <label>Email Adress</label> */}
                            <input 
                                 type='email' 
                                 placeholder="Email Adress"
                                 value={email}
                                 onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className='password'>
                            {/* <label>Password</label> */}
                            <input 
                                  type='password' 
                                  placeholder="Password" 
                                  value={password}
                                  onChange={(e)=> setPassword(e.target.value)}
                                  />
                        </div>
                        <button type='submit' > Log in </button>
                    </div>
                    <div className='register-form-frame'>
                         <div className='register'>
                             <p>New Customer?</p> 
                             <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}>
                             <button type='button'>Register</button>
                             </Link>
                         </div>  
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default LoginScreen

