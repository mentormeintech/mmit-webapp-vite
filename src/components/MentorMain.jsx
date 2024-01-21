import MentorHome from "./MentorHome"
import MentorsBooking from "../pages/mentorsBooking"
import MentorsSettings from "../pages/mentorsSettings"

function MentorMain({Mentor}) {

  return (
    <section className="w-9/12 py-8 px-5">
      {/* <MentorHome Mentor={Mentor} /> */}
      {/* <MentorsBooking /> */}
      <MentorsSettings />
    </section>
  )
}

export default MentorMain