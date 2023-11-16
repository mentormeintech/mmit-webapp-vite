import React from 'react'
import Footer from "../../Components/footer";
import LoginSide from "../../Components/loginside";
import LoginHeader from "../../components/LoginHeader";
import LoginForm from '../../Components/LoginForm';


const MentorLogin = () => {
  return (
    <>
      <div className="overflow-hidden">
        <LoginHeader />
        <div className="flex flex-col md:flex md:flex-row items-center justify-evenly">
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
