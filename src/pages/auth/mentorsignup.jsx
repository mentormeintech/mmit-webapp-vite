import SignupHeader from "../../components/signupheader";
import SignupForm from "../../components/signupform";
import Footer from "../../components/footer"


const MenteeSignup = () => {
    return (
        <>
            <div className="w-[100%] flex flex-col">
                <SignupHeader />
                <div data-aos="fade-right" className="flex w-[100%] lg:flex-row flex-col items-center self-center justify-center">
                    <div className="w-[85%] sm:ml-[20px]">
                        <div className="relative lg:mt-0 mt-[30px] md:w-[410px] lg:-top-40 flex flex-col justify-between">
                            <h1 className="md:w-[33rem] text-[25px] smd:text-4xl font-semibold text-black ">
                                {'Mentor'} <span className="text-orange-400">&</span> Experienced
                                Professionals
                            </h1>
                            <img
                                className="mt-8 w-1/2"
                                src="/images/login.png"
                                width={1000}
                                height={50}
                                alt="Login"
                            />
                        </div>
                    </div>
                    <SignupForm user_type="mentor" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MenteeSignup;
