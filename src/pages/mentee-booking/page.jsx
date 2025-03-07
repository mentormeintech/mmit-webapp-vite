import React, { useState } from "react"
import MenteeSide from "../../components/MenteeSide";
import Header_Signin from "../../components/Header_Signin";

export default function MenteeBooking() {
    const [bookingSection, setBookingSection] = useState({
        upcoming: true,
        pending: false,
        doneSessions: false,
    })

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    function upcomingSection() {
        setBookingSection({
            upcoming: true, pending: false, doneSessions: false
        })
    }

    function pendingSection() {
        setBookingSection({
            upcoming: false, pending: true, doneSessions: false
        })
    }

    function doneSessionSection() {
        setBookingSection({
            upcoming: false, pending: false, doneSessions: true
        })
    }

    function alternateSections() {
        if (bookingSection.upcoming) {
            return <p>You have no upcoming sessions</p>
        }

        else if (bookingSection.pending) {
            return <p>You have no pending sessions</p>
        }

        else if (bookingSection.doneSessions) {
            return <p>You have no done sessions</p>
        }
    }


    const toggleSidebar = () => {
        try {
            setIsSidebarOpen(!isSidebarOpen);
        } catch (error) {
            alert(error.message)
        }
    };

    return (
        // <div className="pt-20 mx-3">
        //     <Header_Signin toggleSidebar={toggleSidebar} />
        //     <div className="flex">
        //         <MenteeSide toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        //         <section className="w-9/12 py-8 px-5 mt-[3rem]">
        //             <h4 className="text-[24px] font-semibold mb-3">Booking</h4>
        //             <p>The session timings are following your local timezone Nigeria.</p>

        //             <ul className="flex items-center mt-12 mb-12">
        //                 <li className={`relative cursor-pointer group ${bookingSection.upcoming ? 'text-[#0F88D9]' : ''}`} onClick={upcomingSection}>
        //                     <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${bookingSection.upcoming ? 'w-full' : 'w-0'} absolute left-0 -bottom-[3px]`}></div> Upcoming
        //                 </li>

        //                 <li className={`relative cursor-pointer group mx-16 ${bookingSection.pending ? 'text-[#0F88D9]' : ''}`} onClick={pendingSection}>
        //                     <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${bookingSection.pending ? 'w-full' : 'w-0'}`}></div> Pending
        //                 </li>

        //                 <li className={`relative cursor-pointer group ${bookingSection.doneSessions ? 'text-[#0F88D9]' : ''}`} onClick={doneSessionSection}>
        //                     <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] absolute left-0 -bottom-[3px] ${bookingSection.doneSessions ? 'w-full' : 'w-0'}`}></div> Done Sessions
        //                 </li>
        //             </ul>

        //             {
        //                 alternateSections()
        //             }
        //         </section>
        //     </div>
        // </div>

        <div className="pt-20 mx-3">
            <Header_Signin toggleSidebar={toggleSidebar} />
            <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <MenteeSide toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

                {/* Main Content */}
                <section className="w-full lg:w-9/12 py-8 px-4 lg:px-5 mt-10 lg:mt-[3rem]">
                    <h4 className="text-2xl lg:text-[24px] font-semibold mb-3">Booking</h4>
                    <p className="text-sm lg:text-base">
                        The session timings are following your local timezone Nigeria.
                    </p>

                    {/* Navigation Tabs */}
                    <ul className="flex items-center mt-8 lg:mt-12 mb-8 lg:mb-12 gap-4 lg:gap-16">
                        <li
                            className={`relative cursor-pointer group text-sm lg:text-base ${bookingSection.upcoming ? "text-[#0F88D9]" : ""
                                }`}
                            onClick={upcomingSection}
                        >
                            <div
                                className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${bookingSection.upcoming ? "w-full" : "w-0"
                                    } absolute left-0 -bottom-[3px]`}
                            ></div>
                            Upcoming
                        </li>

                        <li
                            className={`relative cursor-pointer group text-sm lg:text-base ${bookingSection.pending ? "text-[#0F88D9]" : ""
                                }`}
                            onClick={pendingSection}
                        >
                            <div
                                className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${bookingSection.pending ? "w-full" : "w-0"
                                    } absolute left-0 -bottom-[3px]`}
                            ></div>
                            Pending
                        </li>

                        <li
                            className={`relative cursor-pointer group text-sm lg:text-base ${bookingSection.doneSessions ? "text-[#0F88D9]" : ""
                                }`}
                            onClick={doneSessionSection}
                        >
                            <div
                                className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${bookingSection.doneSessions ? "w-full" : "w-0"
                                    } absolute left-0 -bottom-[3px]`}
                            ></div>
                            Done Sessions
                        </li>
                    </ul>

                    {/* Alternate Sections */}
                    {alternateSections()}
                </section>
            </div>
        </div>
    )
}
