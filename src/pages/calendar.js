import React, { useState } from 'react'
import CalendarAvailability from './../components/CalendarAvailability'
import CalendarBooking from './../components/CalendarBooking'
import CalendarSession from './../components/CalendarSession'
import Header_Signin from './../components/Header_Signin'

function Calendar() {
  const [calendar, setCalendar] = useState({
    availability: true,
    sessionsSetting: false,
    bookingLimit: false,
})

function displayAvailability(){
    setCalendar({
       availability: true, sessionsSetting: false, bookingLimit: false
    })
}

function displaySessionsSetting(){
    setCalendar({
      availability: false, sessionsSetting: true, bookingLimit: false
    })
}

function displayBookingLimit(){
    setCalendar({
      availability: false, sessionsSetting: false, bookingLimit: true
    })
}
  return (
    <>
        {/* <Header_Signin /> */}
        <main className='text-[#454545] px-4 sm:px-10 md:px-24 py-7'>

          <div className='mb-12'>
            <h1 className='text-2xl font-semibold mb-3'>
            {calendar.availability ? "Availability" : calendar.sessionsSetting ? "Sessions setting" : "Booking Limit"}
            </h1>
            <p className='max-w-[800px]'>
            {
            calendar.availability ? `"You should set your availability based on your schedule and commitments. It is important to find a balance that allows you to effectively manage your responsibilities while also being available for any necessary tasks or engagements”` :

             calendar.sessionsSetting ? `"It is recommended that you set your sessions in alignment with your availability. Each session should ideally begin from a minimum of 30 minutes. Striking a balance between your responsibilities and availability is crucial to ensure you can fulfill necessary tasks and engagements. By carefully organizing your sessions, you can optimize your time and be more accessible when needed."` :

              `"It is advisable to set your booking limit in accordance with your availability. Finding a balance that allows you to handle your responsibilities while remaining open for necessary tasks or engagements is crucial. By carefully considering and setting your booking limit, you can ensure that your schedule remains manageable and allows for flexibility when needed."`
            }
            </p>
          </div>

          <div className='border-b mb-12 md:pl-12'>
            <ul className="flex items-center sm:w-[550px] justify-between">
              <li className={`py-2 relative cursor-pointer group ${calendar.availability ? 'text-[#0F88D9]' : ''}`} onClick={displayAvailability}>
                  <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] ${calendar.availability ? 'w-full' : 'w-0'} absolute left-0 -bottom-[2px]`}></div>Availability
              </li>
              <li className={`py-2 relative cursor-pointer group ${calendar.sessionsSetting ? 'text-[#0F88D9]' : ''}`}  onClick={displaySessionsSetting}>
                  <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[2px] ${calendar.sessionsSetting ? 'w-full' : 'w-0'}`}></div>Sessions setting
              </li>
              <li className={`py-2 relative cursor-pointer group ${calendar.bookingLimit ? 'text-[#0F88D9]' : ''}`} onClick={displayBookingLimit}>
                  <div className={`group-hover:w-full transition-all delay-500 ease-in h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[2px] ${calendar.bookingLimit ? 'w-full' : 'w-0'}`}></div>Booking limit
              </li>
            </ul>
          </div>

          {
            calendar.availability ? <CalendarAvailability /> : calendar.sessionsSetting ? <CalendarSession /> : <CalendarBooking />
          }
        </main>
    </>
  )
}

export default Calendar