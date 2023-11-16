import Image from "next/image"

const PartnershipLeft = () => {
  return (
    <section className="w-[47%] pt-24">
        <Image src="/images/team-members.png" alt="team members" width={604} height={551} className="mb-10"/>
        <div className="pl-[18px]">
        <p className="mb-8">{'At MMIT, we recognize the power of collaboration and the value it brings to the tech community. While we are in the exciting phase of building our mentorship platform, we are actively seeking like-minded partners who share our passion for nurturing tech talent and fostering growth.'}</p>

          <p className="mb-8">{'As we work diligently to develop a robust and impactful mentorship experience, we invite potential partners to join us on this journey. Together, we can create a supportive ecosystem that empowers aspiring tech enthusiasts to thrive and succeed in their careers.'}.</p>

          <p className="mb-8">{`By partnering with Mentormeintech you'll be contributing to the future of tech by shaping the next generation of industry leaders. We are eager to explore partnership opportunities that align with our mission and values, and we look forward to collaborating with organizations that share our vision.`}</p>

          <p className="mb-8">{'Join us as we pave the way for a brighter and more inclusive future in the tech landscape. Contact us to explore potential partnership avenues and be a part of this exciting endeavor.'}</p>
        </div>
    </section>
  )
}

export default PartnershipLeft