import SignupHeader from "../../components/signupheader";
import SignupForm from "../../components/signupform";
import Footer from "../../components/footer";
import image from "../../assets/menteesignupimg.png"

const MenteeSignup = () => {
  return (
    <>
      <div className="w-full flex flex-col">
                <SignupHeader />
                <div data-aos="fade-right" className="mt-[5rem] w-11/12 overflow-x-hidden items-center sm:items-start flex flex-col sm:flex-row self-center justify-between lg:justify-center">
                    <div className="lg:ml-[5.5rem]"> 
                        <div className="relative flex flex-col justify-between">
                            <h1 className="lg:w-[33rem] smd:w-[460px] sm:w-[min-content]  md:w-[25rem] text-3xl md:text-4xl font-semibold text-black">
                                {'Mentor'} <span className="text-orange-400">&</span> Experienced
                                Professionals
                            </h1>
                            <img
                                className="mt-8 w-2/3"
                                src={image}
                                width={1000}
                                height={50}
                                alt="Login"
                            />
                        </div>
                    </div>
                    <SignupForm user_type="mentee" />
                </div>
            </div>
            <Footer />
    </>
  );
};

export default MenteeSignup;
