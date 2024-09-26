import React, { useState } from 'react'
import Header_Signin from '../../components/Header_Signin'
import MentorSide from '../../components/MentorSide'
import MentorSchedule from '../../components/schedule'

export default function MentorCalender() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <Header_Signin />
            <div className="flex">
                <MentorSide setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
                <main className={`flex-1 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'ml-0' : 'ml-64'} p-5`}>
                    <section className="w-5/6 mt-36 py-8">
                        <MentorSchedule />
                    </section>
                </main>
            </div>
        </>
    )
}
