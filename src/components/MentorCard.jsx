import React from 'react'

const MentorCard = (props) => {
  const { selected_mentor } = props
  return (
    <div className="flex flex-col items-center rounded-md border bg-[#E4CBC81A] p-8 text-left text-base">
      <div className="mentor-details h-auto">
        <span className="text-base font-medium leading-7 text-zinc-800">
          {/* Hi, I am {selected_mentor?.first_name} {selected_mentor?.last_name}, a Product Designer with nearly four years of
          experience, my background primarily lies in Visual Design. */}
          Hi, I am {selected_mentor?.first_name} {selected_mentor?.last_name}, a <span className='project'>{selected_mentor?.area_of_expertise[0]?.name}</span> with {selected_mentor?.years_of_experience} years of
          experience
          <br />
          <br />
          {/* Details Section */}
          {/* For the past years, I dedicated part of my role to fostering a
          strong design team culture. I believe in the power of scaling
          design rituals and maintaining a high-quality bar as the team
          expands. I believe in the value of collaborative problem-solving
          to drive innovative solutions and in transparent and honest
          communication to foster alignment and drive outcomes. I wish I
          could tell you I learned this the easy way.
          <br />
          <br />I believe I have a lot to share with others when it comes to
          <br />
          <br /> */}
        </span>
        {/* Topics section */}
        {/* <span className="text-base font-medium leading-7 text-zinc-800">
          - dealing with complexity and ambiguity in this new world of
          uncertainty
          <br />
          - how to articulate design decisions <br />
          - ways of working
          <br />
          - design career path
          <br />
          - build your portfolio case or improve existing
          <br />
          - design career path
          <br />
          - figma, design systems, UI design
          <br />
          - UX research methods
          <br />
          - design process
          <br />
        </span> */}
        <span className="text-base font-medium leading-7 text-zinc-800"></span>
      </div>
    </div>
  )
}

export default MentorCard