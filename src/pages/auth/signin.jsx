import React from 'react'
import Footer from "../../components/footer";
import LoginSide from "../../components/loginside";
import LoginHeader from "../../components/loginHeader";
import LoginForm from '../../components/loginForm';


const MentorLogin = () => {
  return (
    <>
      <div>
        <LoginHeader />
        <div className="flex flex-col md:flex md:flex-row justify-around mx-5 mt-[5rem] mb-[10rem]">
          <LoginSide />
          <LoginForm />
        </div>
      </div>
      <div className="-mt-20">
        <Footer />
      </div>
    </>
  );
};

export default MentorLogin;
