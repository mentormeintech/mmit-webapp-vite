import React from "react";
import MenteeSide from "../../components/MenteeSide";
import Header_Signin from "../../components/Header_Signin";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link } from 'react-router-dom';
>>>>>>> 8fd383a93cc1529c05080038f81abf5c9102e7f4

const MenteeSupport = () => {
  const supportLinks = [
    { text: "Help center", url: "" },
    { text: "Contact us", url: "" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "FAQ", url: "" },
]
  return (
    <div className="pt-20 mx-3">
      <Header_Signin />
      <div className="flex">
        <MenteeSide />
<<<<<<< HEAD
        <section className="w-9/12 mt-[3rem] py-8 px-5">
          <div className="flex gap-x-3">
            <div className="border p-6">Help Center</div>
            <div className="border p-6">Contact us</div>
            <Link to="/privacy-policy" className="border p-6">
              Privacy Policy
            </Link>
            <div className="border p-6">FAQ</div>
          </div>
        </section>
=======
        <section className="w-9/12 mt-36 py-8 px-5">
                    <h4 className='text-[#454545] text-xl font-semibold mb-12'>Support</h4>

                    <div className='w-9/12 flex justify-between items-center'>
                        {
                            supportLinks.map((link, index) => {
                                return <Link key={index} to={link.url} className='text-[#454545] flex items-center justify-center w-[23%] h-28 border rounded'>
                                    {link.text}
                                </Link>
                            })
                        }
                    </div>
                </section>
>>>>>>> 8fd383a93cc1529c05080038f81abf5c9102e7f4
      </div>
    </div>
  );
};

export default MenteeSupport;
