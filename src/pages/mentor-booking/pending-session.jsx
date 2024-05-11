import React from 'react'
import moment from "moment/moment";

export default function PendingSession(props) {
    const { upcomingSession } = props

    const pendingSessions = upcomingSession.filter(item =>
        item.session.some(session_item => session_item.status === 'not approved')
    );
    return (
        <div>
            {pendingSessions && pendingSessions?.length > 0 ? <>
                {pendingSessions?.map((item, key) => (
                    item?.session && item?.session.length > 0 && item?.session?.map((session_item, index) => (
                        session_item?.status === 'not approved' && <div className="flex flex-col gap-3" key={index}>
                            <div>
                                You have a session with {item?.mentee[index]?.first_name} {item?.mentee[index]?.last_name} {""} for{" "}
                                {moment(session_item?.time || new Date).format("MMMM Do, YYYY, h:mm A")}
                            </div>
                            <div className="w-[100%] my-3 mx-auto border border-gray-200"></div>
                        </div>
                    ))
                ))}
            </> : <p>You have no pending sessions</p>}
        </div>
    )
}
