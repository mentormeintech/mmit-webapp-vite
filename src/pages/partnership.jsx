import Handshake from "../components/Handshake";
import Footer from "../components/footer";
import PartnershipLeft from "../components/PartnershipLeft.jsx";
import PartnershipForm from "../components/PartnershipForm";
import Header from "../components/Header";

function PartnershipPage() {
  return (
    <div>
      <Header />
      {/* This is the correct usage of the Handshake component */}
      <Handshake />
      <div className="pt-10 max-w-6xl lg:mx-auto mx-4">
        <PartnershipLeft />
        <PartnershipForm />
      </div>
      <Footer />
    </div>
  );
}

export default PartnershipPage;
