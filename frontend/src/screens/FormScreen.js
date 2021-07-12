import React, {useState} from 'react'
import './FormScreen.css'
import data from '../constants/data'

const FormScreen = () => {


    const [form, setForm] = useState([data[0]])
    const submitHandler = () => {

    }


    /**
     * აქ უნდა იყოს რექუესთები და შესაბამისად no და yes ზე წამოიღებ იმ ობიექტებს რაც გჭირდება
     *
     * */
    const yes = (m) => {
        const newQuestion = data.find((d) => d.id === m.yes) // ამის წაშლა მოგიწევს როცა რექუესტს გააკეთებ და რაც მოგივა იმას ჩასვამ ობიექტად პირდაპირ
        if (newQuestion) {
            setForm([...form, {
                ...newQuestion,
                margin: true
            }])
        }
    }
    const no = (m) => {
        const newQuestion = data.find((d) => d.id === m.no)
        if (newQuestion) {
            setForm([...form, {
                ...newQuestion,
                margin: false
            }])
        }
    }


    return (
        <section className='center'>
            <div>
                <div className='center-width'>
                    <h1>კოვიდ-19 ვაქცინის გაკეთების თანხმობის ფორმა</h1>
                    {
                        form.map((m, i) => (
                            <div key={i}>
                                <div style={
                                    m.margin ? {
                                        marginLeft: 100
                                    }: {
                                        marginLeft: 0
                                    }
                                } className="form-box">
                                    <h2>{m.question}</h2>
                                    {
                                        m.no && m.yes && <>
                                            <div className='radio-box'>
                                                <input id='diax'
                                                       name="test"
                                                       type="radio"
                                                       onChange={() => yes(m)}
                                                />
                                                <label htmlFor='diax'> დიახ</label>
                                            </div>
                                            <div className='radio-box'>
                                                <input id='ara'
                                                       name="test"
                                                       type="radio"
                                                       onChange={() => no(m)}
                                                />
                                                <label htmlFor='ara'>არა</label>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <button onClick={submitHandler} type='submit'>გაგზავნა</button>
                </div>
            </div>
        </section>
    )
}

export default FormScreen
