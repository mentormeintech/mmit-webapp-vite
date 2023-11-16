import MentorSide from "../components/MentorSide";
import React, { useState } from "react"
import { CurrentMentor } from "../components/CurrentMentor";
import Header_Signin from "../components/Header_Signin";

function MentorBooking() {
    const [bookingSection, setBookingSection] = useState({
        upcoming: true,
        pending: false,
        doneSessions: false,
    })

    function upcomingSection(){
        setBookingSection({
           upcoming: true, pending: false, doneSessions: false
        })
    }

    function pendingSection(){
        setBookingSection({
           upcoming: false, pending: true, doneSessions: false
        })
    }

    function doneSessionSection(){
        setBookingSection({
           upcoming: false, pending: false, doneSessions: true
        })
    }

    function alternateSections(){
        if(bookingSection.upcoming){
            return <p>You have no upcoming sessions</p>
        }

        else if(bookingSection.pending){
            return <p>You have no pending sessions</p>
        }

        else if(bookingSection.doneSessions){
            return <p>You have no done sessions</p>
        }
    }

    const Mentor = CurrentMentor

  return (
    <>
        <Header_Signin />
        <div className="flex">
            <MentorSide Mentor={Mentor}/>
            <section className="w-9/12 mt-36 py-8 px-5">
                <h4 className="text-[24px] font-semibold mb-3">Booking</h4>
                <p>The session timings are following your local timezone Nigeria.</p>

                <ul className="flex items-center mt-12 mb-12">
                    <li className={`relative cursor-pointer group ${bookingSection.upcoming ? 'text-[#0F88D9]' : ''}`} onClick={upcomingSection}>
                        <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${bookingSection.upcoming ? 'w-full' : 'w-0'} absolute left-0 -bottom-[3px]`}></div> Upcoming
                    </li>

                    <li className={`relative cursor-pointer group mx-16 ${bookingSection.pending ? 'text-[#0F88D9]' : ''}`}  onClick={pendingSection}>
                        <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${bookingSection.pending ? 'w-full' : 'w-0'}`}></div> Pending
                    </li>

                    <li className={`relative cursor-pointer group ${bookingSection.doneSessions ? 'text-[#0F88D9]' : ''}`} onClick={doneSessionSection}>
                        <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${bookingSection.doneSessions ? 'w-full' : 'w-0'}`}></div> Done Sessions
                    </li>
                </ul>

                {
                    alternateSections()
                }
            </section>
        </div>
    </>
  )
}

export default MentorBooking