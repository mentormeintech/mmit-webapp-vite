import React from 'react'

export default function Personalinfo(props) {
  const { dashboard } = props
  return (
    <form className="w-full lg:w-9/12">
      {/* Personal Information Section */}
      <section className="w-full lg:w-6/12">
        {/* Full Name Field */}
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm lg:text-base">Full Name</p>
            <label htmlFor="full-name" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
              Edit
            </label>
          </div>
          <input
            type="text"
            id="full-name"
            placeholder="John Doe"
            className="bg-transparent w-full outline-none border-b-[0.02px] border-[#434343] pb-2 text-sm lg:text-base"
            onChange={(event) => console.log(event.target.value)}
            value={`${dashboard?.first_name} ${dashboard?.last_name}`}
          />
        </div>

        {/* Gender Field */}
        <div className="w-full mb-8">
          <label className="block mb-3 text-sm lg:text-base">Gender</label>
          <select
            className="bg-transparent outline-none w-full border-b-[0.02px] border-b-[#434343] box-shadow-none px-2 mb-5"
            name="gender"
          // value={formData.gender}
          // onChange={handleChange}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        {/* Country Field */}
        <div className="mb-8">
          <label className="block mb-3 text-sm lg:text-base">Country</label>
          <input
            type="text"
            id="country"
            placeholder="NG NIGERIA"
            className="outline-none border-b-[0.02px] border-[#434343] pb-2 w-full text-sm lg:text-base"
            onChange={(event) => console.log(event.target.value)}
            value={dashboard?.country || "N/A"}
          />
        </div>

        {/* Phone Number Field */}
        <div className="w-full mb-8">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm lg:text-base">Phone Number</p>
            <label htmlFor="phone-number" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
              Edit
            </label>
          </div>
          <input
            type="text"
            id="phone-number"
            placeholder="N/A"
            className="outline-none border-b-[0.02px] w-full border-[#434343] pb-2 text-sm lg:text-base"
          />
        </div>
      </section>

      {/* About Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm lg:text-base">About</p>
          <label htmlFor="about" className="cursor-pointer text-sm lg:text-base text-[#0F88D9]">
            Edit
          </label>
        </div>
        <textarea
          id="about"
          className="bg-transparent outline-none h-40 lg:h-56 bg-[#FDF8F8] resize-none w-full py-2 px-4 text-sm lg:text-base"
          onChange={(event) => console.log(event.target.value)}
          defaultValue={dashboard?.about_me || ""}
        ></textarea>
      </div>

      {/* Save Button */}
      <button className="bg-[#FE9B7E] rounded-md w-full lg:w-96 h-11 text-white text-sm lg:text-base hover:bg-[#FF8A6A] transition-colors duration-300">
        Save
      </button>
    </form>
  )
}
