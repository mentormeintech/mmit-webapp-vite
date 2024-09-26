import React from 'react'
import style from './contact.module.css'

export default function ContactInput(props) {
    const { textarea, title, placeholder } = props
    return (
        <div className='w-full my-[.8rem] flex flex-col justify-center'>
            <span className='text-[#454545] font-900 my-1'>{title}</span>
            {textarea == true ? <textarea className={`${style.textarea}`} rows="9" placeholder={placeholder} /> : <input className={`${style.input}`} placeholder={placeholder} />}

        </div>
    )
}
