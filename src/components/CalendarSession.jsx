import React from 'react'

function CalendarSession() {
  return (
    <section>
        <form>
            <p className='mb-9'>Define how long your event will be minimum of 15 </p>

            <div className='w-11/12 max-w-72 sm:w-72 mb-10'>
                <label className='block text-center text-xl mb-3'>Duration in minutes</label>
                <input
                    placeholder='15 minutes'
                    type='text'
                    className='h-24 rounded border w-full px-4 outline-none'
                />
            </div>

            <div className='sm:w-[551px]'>
                <h4 className='font-medium mb-3'>Notice period</h4>
                <p className=' px-2 sm:px-6'>Establish a minimum booking interval. Users will be unable to schedule appointments with you within this specified timeframe. The default setting is 24 hours.</p>
            </div>

            <div className='w-11/12 max-w-72 sm:w-72 mt-10'>
                <label className='block text-center text-xs mb-3'>Notice in hours</label>
                <input
                    placeholder='1 hour'
                    type='text'
                    className='h-24 rounded border w-full px-4 outline-none'
                />
            </div>

            <button className='bg-[#0F88D9] text-white w-48 h-12 rounded-lg mt-12'>Update session</button>
        </form>
    </section>
  )
}

export default CalendarSession