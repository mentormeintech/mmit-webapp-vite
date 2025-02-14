import Header from "../../components/Header";
import Footer from "../../components/footer";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import MentorCard from "../../components/MentorCard";
import MentorScheduleCard from "../../components/MentorScheduleCard";
import { useState, useLayoutEffect } from "react";
import { mentorAccess } from "../../utilities/tokenClient";
import { userGetRequest } from "../../utilities/apiClient";
import Alert from "../../features/Alert";
import Spinner from "../../components/Spinner";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MentorProfile = () => {
    const { mentor_name } = useParams();
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [mentorEvents, setMentorEvents] = useState([]);
    const { selected_mentor } = useSelector((state) => state.selected_mentor);

    useLayoutEffect(() => {
        getMentorEvent();
    }, []);

    const toggleSchedule = () => setShowSchedule(!showSchedule);

    async function getMentorEvent() {
        try {
            const mentor_id = localStorage.getItem(mentorAccess);
            if (!mentor_id) {
                return navigation("/findamentor");
            }
            setLoading(true);
            const response = await userGetRequest(`event/mentor/events?mentor_id=${mentor_id}`);
            if (response?.success) {
                setMentorEvents(response.data);
            } else {
                Alert(response.message, "warning");
            }
            setLoading(false);
        } catch (error) {
            Alert(error.message, "error");
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="w-full overflow-x-hidden overflow-y-hidden pt-16">
                    <Header />
                    <motion.div initial={{ y: -200 }} animate={{ y: 0 }} transition={{ type: "tween", stiffness: 120 }}>
                        <img src="/images/background.png" alt="mentor-dp" className="w-full h-50 object-cover" />
                    </motion.div>

                    <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 80 }}>
                        <div className="relative flex flex-col items-center mt-16 px-4 md:px-11">
                            <img className="h-40 w-40 md:h-52 md:w-52 rounded-full object-cover"
                                src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                                alt="profilephoto"
                            />
                            <div className="text-center mt-4 md:mt-0">
                                <h1 className="text-2xl md:text-4xl font-semibold capitalize mb-2">
                                    {mentor_name || "NIL"}
                                </h1>
                                <p className="text-lg md:text-xl capitalize">
                                    {selected_mentor?.area_of_expertise[0]?.name}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ x: -100, y: 130 }} animate={{ x: 0, y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} className="m-auto mt-16 max-w-screen-xl px-4 md:px-11">
                        <h1 className="mb-5 text-2xl md:text-4xl font-semibold">Overview</h1>
                        <MentorCard selected_mentor={selected_mentor} />

                        <div className="mt-8">
                            <button
                                className="bg-primary-500 hover:bg-opacity-70 w-full md:w-[200px] text-center py-2 text-white rounded-md font-semibold"
                                onClick={toggleSchedule}
                            >
                                {showSchedule ? "Hide Schedule" : "Book a Session"}
                            </button>
                        </div>

                        {showSchedule && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 120 }} className="mt-8">
                                <h1 className="mb-4 text-2xl md:text-4xl font-semibold">Book a Session</h1>
                                <MentorScheduleCard mentorEvent={mentorEvents} mentor_id={localStorage.getItem(mentorAccess)} />
                            </motion.div>
                        )}

                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 120 }} className="mt-8 flex gap-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-300 text-black hover:bg-blue-500 hover:text-white transition">
                                <FaTwitter />
                            </a>
                            <a href="mailto:someone@example.com" className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-300 text-black hover:bg-red-500 hover:text-white transition">
                                <GrMail />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-300 text-black hover:bg-blue-700 hover:text-white transition">
                                <FaLinkedinIn />
                            </a>
                        </motion.div>
                    </motion.div>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default MentorProfile;
