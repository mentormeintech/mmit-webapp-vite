import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsToggleOn } from 'react-icons/bs'
import { CurrentMentor } from './CurrentMentor'

function CalendarAvailability() {
  return (
    <section>
        <ul>
            {
                CurrentMentor.availability.map((x, index) => {
                    return <li className='border-b' key={index}>
                    <div className='md:w-[600px] flex justify-between items-center my-8'>
                        <i className='text-3xl'><BsToggleOn /></i>
                        <span>{x.day}</span>
                        <i className='text-2xl font-bold text-black '><AiOutlinePlus /></i>
                    </div>
                </li>
                })
            }
        </ul>

        <div className='mt-12'>
            <button className='bg-[#0F88D9] text-white w-52 sm:w-60 h-14 rounded-xl'>Update Availability</button>
        </div>
    </section>
  )
}

export default CalendarAvailability