
import React, { useState } from 'react'
import './FormScreen.css'

const FormScreen = () => {
    
    
    const submitHandler = () => {
      
    }

    

    return (
        <section className='center'>
            <form onSubmit={submitHandler}>
            <div className='center-width'>
              <h1>კოვიდ-19 ვაქცინის გაკეთების თანხმობის ფორმა</h1>
              <div className="form-box">
                <h2>ხომ არ დაგიდასტურდათ კოვიდ-19?</h2>
                <div className='radio-box'>
                   <input id='diax' 
                         name="test"
                         type="radio" 
                         value='yes'
                          />
                   <label htmlFor='diax'> დიახ</label> 
                </div>
                <div className='radio-box'>
                   <input id='ara' 
                         name="test" 
                         type="radio"
                         value='no'
                       />
                   <label htmlFor='ara'>არა</label> 
                </div>
              </div>   
              <button type='submit'>გაგზავნა</button>  
            </div>
            </form>
            
            
        </section>   
    )
}

export default FormScreen
