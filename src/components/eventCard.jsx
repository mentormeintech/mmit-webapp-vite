import React from 'react';

export const EventCard = ({ event }) => {
    // console.log("event.start.timeZone",event)
    return (
        <div className="flex flex-col items-start w-full">
            <div className="w-full max-w-md mx-auto md:mx-0 md:ml-4 md:mt-4">
                {event ? (
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6" >
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">Mentorship Session</h2>
                        <p className="text-gray-500 mb-4">Session with a mentee</p>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-600">Start:</span>
                                <span className="text-gray-700">{new Date(event.start).toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-600">End:</span>
                                <span className="text-gray-700">{new Date(event.end).toLocaleString()}</span>
                            </div>
                            {/* Optional Time Zone Display */}
                            {/* <div className="flex items-center justify-between mt-4">
                                <span className="font-semibold text-gray-600">Time Zone:</span>
                                <span className="text-gray-700">{Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
                            </div> */}
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">No Events Available</h2>
                        <p className="text-gray-500">You have no scheduled mentorship sessions.</p>
                    </div>
                )}
            </div>
        </div>
    
    );
};

