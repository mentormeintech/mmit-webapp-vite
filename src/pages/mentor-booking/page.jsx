import MentorSide from "../../components/MentorSide";
import React, { useState, useLayoutEffect } from "react"
import { CurrentMentor } from "../../components/CurrentMentor";
import Header_Signin from "../../components/Header_Signin";
import Upcoming from "./upcoming";
import { useSelector } from "react-redux";
import { userGetRequest } from "../../utilities/apiClient";
import { useNavigate } from "react-router-dom";
import Alert from "../../features/Alert";
import Spinner from "../../components/Spinner";
import PendingSession from "./pending-session";

function MentorBooking() {
    const navigation = useNavigate();
    const [loading, setloading] = useState(false);
    const [upcomingSessions, setUpcomingSessions] = useState([]);
    const [bookingSection, setBookingSection] = useState({
        upcoming: true,
        pending: false,
        doneSessions: false,
    })
    const { dashboard } = useSelector((state) => state.mentor_me_user)

    async function getMentorUpcomingSession() {
        try {
            if (!dashboard && dashboard._id) {
                return navigation("/mentor");
            }
            setloading(true);
            // const response = await userGetRequest(`event/mentor/events?mentor_id=${dashboard._id}`);
            const response = await userGetRequest(`event/upcoming-session`);
            if (response && response.success === true) {
                setUpcomingSessions(response?.data);
                // console.log("response?.data",response?.data)
                setloading(false);
            } else {
                Alert(response.message, "warning");
                setloading(false);
            }
            setloading(false);
        } catch (error) {
            Alert(error.message, "error");
            setloading(false);
        }
    }

    useLayoutEffect(() => {
        getMentorUpcomingSession()
    }, [])
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
            return <Upcoming upcomingSession={upcomingSessions} />
        }

        else if (bookingSection.pending) {
            return <PendingSession upcomingSession={upcomingSessions} />
        }

        else if (bookingSection.doneSessions) {
            return <p>You have no done sessions</p>
        }
    }

    const Mentor = CurrentMentor

    return (
        <>
            <Header_Signin />
            {loading ? <Spinner /> : <div className="flex">
                <MentorSide Mentor={Mentor} />
                <section className="w-9/12 mt-36 py-8 px-5">
                    <h4 className="text-[24px] font-semibold mb-3">Booking</h4>
                    <p>The session timings are following your local timezone Nigeria.</p>

                    <ul className="flex items-center mt-12 mb-12">
                        <li className={`relative cursor-pointer group ${bookingSection.upcoming ? 'text-[#0F88D9]' : ''}`} onClick={upcomingSection}>
                            <div className={`group-hover:w-full transition-all delay-500 ease-in-out h-[2px] bg-[#0F88D9] ${bookingSection.upcoming ? 'w-full' : 'w-0'} absolute left-0 -bottom-[3px]`}></div> Upcoming
                        </li>

                        <li className={`relative cursor-pointer group mx-16 ${bookingSection.pending ? 'text-[#0F88D9]' : ''}`} onClick={pendingSection}>
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
            </div>}
        </>
    )
}

export default MentorBooking