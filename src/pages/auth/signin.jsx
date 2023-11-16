import React from 'react'
// import Footer from "../../Components/footer";
import LoginSide from "../../components/loginside";
// import LoginHeader from "../../components/loginHeader";
// import LoginForm from '../../components/loginForm';


const MentorLogin = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* <LoginHeader /> */}
        <div className="flex flex-col md:flex md:flex-row items-center justify-evenly">
          <LoginSide />
          {/* <LoginForm /> */}
        </div>
      </div>
      <div className="-mt-20">
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MentorLogin;
