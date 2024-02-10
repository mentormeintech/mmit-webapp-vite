import React from 'react'
import Header_Signin from '../../components/Header_Signin'
import MentorSide from '../../components/MentorSide'
import MentorSchedule from '../../components/schedule'

export default function MentorCalender() {
    return (
        <>
            <Header_Signin />
            <div className="flex">
                <MentorSide />
                <section className="w-5/6 mt-36 py-8">
                    <MentorSchedule />
                </section>
            </div>
        </>
    )
}
