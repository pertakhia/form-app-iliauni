import React from 'react'
import '../screens/HomeScreen.css'
import FormScreen from './FormScreen'

const HomeScreen = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Welcome to FormApp</h1>
            <FormScreen/>
        </div>
    )
}

export default HomeScreen
