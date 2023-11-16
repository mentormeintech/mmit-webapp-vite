import React from 'react'

function CalendarBooking() {
  return (
    <section>
        <form>
            <div className='mb-10'>
                <label className='block mb-6'>Daily booking limit</label>
                <input
                    type='text'
                    className='border w-11/12 max-w-72 sm:w-80 h-24'
                />
            </div>

            <div className='mb-10'>
                <label className='block mb-6'>Weekly booking limit</label>
                <input
                    type='text'
                    className='border w-11/12 max-w-72 sm:w-80 h-24'
                />
            </div>

            <button className='bg-[#0F88D9] text-white w-[220px] sm:w-[267px] h-12 rounded-lg mt-8'>Update Booking Limit</button>
        </form>
    </section>
  )
}

export default CalendarBooking