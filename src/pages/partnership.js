import Handshake from "./../components/Handshake";
import Footer from "./../components/footer";
import PartnershipLeft from "./../components/PartnershipLeft";
import PartnershipForm from "./../components/PartnershipForm";
import Header from "./../components/Header";
import Image from "next/image";

function PartnershipPage() {
  return (
    <div>
      <Header />
      <Handshake /> {/* This is the correct usage of the Handshake component */}
      <div className="relative flex justify-between pb-[400px] pl-24 pt-14">
        <Image
          src="/images/right-tri.png"
          width={352}
          height={557}
          alt="tri"
          className="absolute bottom-0 right-0 z-[-1]"
        />
        <PartnershipLeft />
        <PartnershipForm />
      </div>
      <Footer />
    </div>
  );
}

export default PartnershipPage;
