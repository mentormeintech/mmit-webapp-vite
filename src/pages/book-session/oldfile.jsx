import Header from "../../components/Header";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { accessToken } from "../../utilities/tokenClient";
import { logUserOut, userGetRequest } from "../../utilities/apiClient";
import Alert from "../../features/Alert";
import Spinner from "../../components/Spinner";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import SessionTime from "../../components/sessionTime";


const BookSession = () => {
    const { session_id } = useParams();
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    const [mentorSession, setMentorSession] = useState({});
    const { selected_mentor } = useSelector((state) => state.selected_mentor);


    useLayoutEffect(() => {
        getSession(session_id);
    }, []);

    async function getSession(session_id) {
        try {
            const userToken = localStorage.getItem(accessToken);
            if (!userToken) {
                return logUserOut()
            }
            setLoading(true);
            const response = await userGetRequest(`event/session?session_id=${session_id}`);
            if (response && response.success === true) {
                setMentorSession(response?.data);
                // console.log("response?.data", response?.data)
                return setLoading(false);
            } else {
                Alert(response.message, "warning");
                return setLoading(false);
            }
        } catch (error) {
            Alert(error.message, "error");
            return setLoading(false);
        }
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="w-full overflow-x-hidden overflow-y-hidden pt-16">
                    <Header />
                    <motion.div
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        transition={{ type: "tween", stiffness: 120 }}
                        className="relative w-full"
                    >
                        <img
                            src="/images/background.png"
                            alt="mentor-dp"
                            className="absolute w-full h-50"
                        />
                    </motion.div>
                    <motion.div
                        className="relative"
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 80 }}
                    >
                        <div className="relative flex flex-col items-center mt-16 px-4 md:px-11">
                            <img
                                className="h-40 w-40 md:h-52 md:w-52 rounded-full object-cover"
                                src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                                alt="profilephoto"
                            />
                            <div className="text-center mt-4 md:mt-0">
                                <h1 className="text-2xl md:text-4xl font-semibold capitalize mb-2">
                                    {`${selected_mentor.first_name} ${selected_mentor.last_name}` || "NIL"}
                                </h1>
                                <p className="text-lg md:text-xl capitalize">
                                    {selected_mentor?.area_of_expertise[0]?.name}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -100, y: 130 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                            type: "tween",
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="m-auto mt-16 max-w-screen-xl px-4 md:px-11"
                    >
                        <h1 className="mb-5 text-2xl md:text-3xl font-normal capitalize">
                            {/* {`Book a ${mentorSession?.title} Session with ${selected_mentor.first_name}`} */}
                            {`Book a ${mentorSession?.session?.title} with ${selected_mentor.first_name}`}
                        </h1>
                        <div>
                            <Box className="relative  bg-white p-8 rounded-lg shadow-xl">
                                <SessionTime
                                // handleAddEvent={handleAddEvent}
                                // setSelectedTime={setSelectedTime}
                                // selectedDate={selectedDate}
                                />
                            </Box>
                        </div>
                    </motion.div>
                    <div className="mt-20">
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default BookSession;
