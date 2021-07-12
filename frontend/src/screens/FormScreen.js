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

    const yes = (m, i) => {
        const newQuestion = data.find((d) => d.id === m.yes) // ამის წაშლა მოგიწევს როცა რექუესტს გააკეთებ და რაც მოგივა იმას ჩასვამ ობიექტად პირდაპირ
        const tmp = form
        const newFrom = m.chosen ? tmp.slice(0, i + 1) : form
        const correctArray = returnCorrectArray(newFrom, m, `diax`)
        if (newQuestion) {
            setForm([...correctArray, {
                ...newQuestion,
                margin: true,
            }])
        }
    }
    const no = (m, i) => {
        const newQuestion = data.find((d) => d.id === m.no)
        const tmp = form
        const newFrom = m.chosen ? tmp.slice(0, i + 1) : form
        const correctArray = returnCorrectArray(newFrom, m, `ara`)
        if (newQuestion) {
            setForm([...correctArray, {
                ...newQuestion,
                margin: false,
            }])
        }
    }

    const returnCorrectArray = (array, element, key) => {
        return array.map(el => el.id === element.id ? ({
                ...el,
                chosen: key
            }) : el
        )
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
                                                <input id={`diax_${i}`}
                                                       name={`diax_${i}`}
                                                       type="radio"
                                                       checked={m.chosen === `diax`}
                                                       onChange={() => yes(m, i)}
                                                />
                                                <label htmlFor='diax'> დიახ</label>
                                            </div>
                                            <div className='radio-box'>
                                                <input id={`ara_${i}`}
                                                       name={`ara_${i}`}
                                                       type="radio"
                                                       checked={m.chosen === `ara`}
                                                       onChange={() => no(m, i)}
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
