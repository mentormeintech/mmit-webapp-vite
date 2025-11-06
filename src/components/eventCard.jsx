import React from 'react';
import { formatEventDuration } from '../utilities/util';

export const EventCard = ({ event, onEventDelete }) => {

    const handleDelete = () => {
        onEventDelete(event)
    }


    return (
        <div className="flex flex-col items-start w-full">
            <div className="w-full max-w-md mx-auto md:mx-0 md:ml-4 md:mt-4">
                <div className="flex justify-end mb-[-15px] ">
                    <button onClick={handleDelete} className='focus:outline-none'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                        <linearGradient id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1" x1="7.534" x2="27.557" y1="7.534" y2="27.557" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)" d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0 L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599 c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"></path><linearGradient id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2" x1="27.373" x2="40.507" y1="27.373" y2="40.507" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a8142e"></stop><stop offset=".179" stop-color="#ba1632"></stop><stop offset=".243" stop-color="#c21734"></stop></linearGradient><path fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)" d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019 c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"></path>
                    </svg>
                    </button>
                </div>
                {event ? (
                    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-600 mb-2 capitalize">{event.title || 'Mentorship Session'}</h2>
                        <p className="text-gray-500 mb-4">{event?.description || "Session with a mentee"}</p>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-600">Duration:</span>
                                <span className="text-gray-700">{formatEventDuration(event?.duration) || '0'}</span>
                            </div>
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

