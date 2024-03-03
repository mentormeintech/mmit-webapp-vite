import React from "react";
import Header from "../../components/Header";
import MenteeSide from "../../components/MenteeSide";

const MenteeSupport = () => {
  return (
    <div className="pt-20 mx-3">
      <Header />
      <div className="flex">
        <MenteeSide />
        <section className="w-9/12 py-8 px-5">
          <div className="flex gap-x-3">
            <div className="border p-6">Help Center</div>
            <div className="border p-6">Contact us</div>
            <div className="border p-6">Privacy Policy</div>
            <div className="border p-6">FAQ</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenteeSupport;
