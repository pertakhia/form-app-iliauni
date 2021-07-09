import React, { useEffect, useState } from 'react'
import '../screens/LoginScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import { Link } from 'react-router-dom'

const RegisterScreen = ({location, history}) => {

    const [name, setName] =  useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=> {
        if(userInfo) {
            history.push(redirect)
        }
    },[history, userInfo, redirect])
 
    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }


    return (
        <div  className='display-flex' >
            <div className='form-container'>
                <form onSubmit={submitHandler} >
                   {message && <Message variant='danger'>{message}</Message>}
                   {error && <Message variant='danger'>{error}</Message>}
                   {loading && <Loader/>}
                    <div className='login-form-frame'> 
                        <h1>SING UP</h1>
                        <div className='text-name'>
                            <input type='text' 
                                   placeholder="Name"
                                   value={name}
                                   onChange={(e)=> setName(e.target.value)}
                                    />
                        </div>
                        <div className='email'>
                            <input type='email' 
                                   placeholder="Email Adress"
                                   value={email}
                                   onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className='password'>
                            <input type='password' 
                                   placeholder="Password"
                                   value={password}
                                   onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <div className='password'>
                            <input type='password' 
                                   placeholder="Confirm Password"
                                   value={confirmPassword}
                                   onChange={(e)=> setConfirmPassword(e.target.value)} />
                        </div>    
                        <button type='submit' > REGISTER </button>
                    </div>
                    <div className='register-form-frame'>
                         <div className='register'>
                             <p>Have an Account?</p> 
                             <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>
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
