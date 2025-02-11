import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import { siteMap } from "../../utilities/pageData.util";

export default function SiteMap() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="justify-center overflow-hidden m-auto w-[100%]">
      <Header />
      <div
        // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className=" m-auto w-[73%] mt-[7rem] mb-[3rem] p-1"
      >
        <div className="bg-[#F6FAFD] p-4 md:w-[50vh]">
          <h2 className="text-[#0F88D9] text-2xl font-semibold">Site Map</h2>
          <span className="pt-3">Updated on 5th of May, 2024</span>
        </div>

        <div>
          {siteMap.map((item, index) => (
            <div className="flex flex-col gap-1.5 my-4" key={index}>
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
