import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'


const ProfileScreen = ({history}) => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
  
    const dispatch = useDispatch()
  
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile


    useEffect(() => {
        if (!userInfo) {
          history.push('/login')
        } else {
          if (!user.name) {
          
             dispatch(getUserDetails('profile'))
          } else {
            setName(user.name)
            setEmail(user.email)
          }
        }
      }, [dispatch, history, userInfo, user])

      const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
          setMessage('Passwords do not match')
        } else {
          dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
      }
    

    return (
      <div  className='display-flex' >
      <div className='form-container'>
          <form onSubmit={submitHandler} >
             {message && <Message variant='danger'>{message}</Message>}
             {error && <Message variant='danger'>{error}</Message>}
             {success && <Message variant='success'>Profile Update</Message>}
             {loading && <Loader/>}
              <div className='login-form-frame'> 
                  <h1>User Profile</h1>
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
                  <button type='submit' > Update </button>
              </div>
          </form>
      </div>
  </div>
    )
}

export default ProfileScreen
