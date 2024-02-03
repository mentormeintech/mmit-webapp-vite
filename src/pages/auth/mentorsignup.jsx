import SignupHeader from "../../components/signupheader";
import SignupForm from "../../components/signupform";
import Footer from "../../components/footer"


const MenteeSignup = () => {
    return (
        <>
            <div className="w-[100%] flex flex-col">
                <SignupHeader />
                <div data-aos="fade-right" className="flex  overflow-x-hidden w-[100%] items-center lg:w-[80%] lg:flex-row flex-col self-center justify-center">
                    <div className="w-[85%] sm:ml-[20px]  smd:w-[480px] lg:pl-[37px]">
                        <div className="relative mt-[30px] xl:-top-[225px] lg:-top-[250px] md:w-[410px] lg:mt-[65px] flex flex-col justify-between">
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
