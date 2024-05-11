import React from 'react'
import moment from "moment/moment";

export default function Upcoming(props) {
    const { upcomingSession } = props

    const upcomingApprovedSessions = upcomingSession.filter(item =>
        item.session.some(session_item => session_item.status === 'approved')
    );
    return (
        <div>
            {upcomingApprovedSessions && upcomingApprovedSessions?.length > 0 ? <>
                {upcomingApprovedSessions?.map((item, key) => (
                    item?.session && item?.session.length > 0 && item?.session?.map((session_item, index) => (
                        session_item?.status === 'approved' ? <div className="flex flex-col gap-3" key={index}>
                            <div>
                                You have a session with {item?.mentee[index]?.first_name} {item?.mentee[index]?.last_name} {""} for{" "}
                                {moment(session_item?.time || new Date).format("MMMM Do, YYYY, h:mm A")}
                            </div>
                            <div className="w-[100%] my-3 mx-auto border border-gray-200"></div>
                        </div> : null
                    ))
                ))}
            </> : <p>You have no upcoming sessions</p>}
        </div>
    )
}
