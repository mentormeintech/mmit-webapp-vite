import React from 'react'

const MentorCard = (props) => {
  const { selected_mentor } = props
  return (
    <div className="flex flex-col items-center rounded-md border bg-[#E4CBC81A] p-8 text-left text-base">
      <div className="mentor-details h-auto">
        <span className="text-base font-medium leading-7 text-zinc-800">
         {selected_mentor?.about_me}
          {/* Hi, I am {selected_mentor?.first_name} {selected_mentor?.last_name}, a <span className='project'>{selected_mentor?.area_of_expertise[0]?.name}</span> with {selected_mentor?.years_of_experience} years of
          experience */}
          <br />
          <br />
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