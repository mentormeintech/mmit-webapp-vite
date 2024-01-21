import React from 'react'

export default function Personalinfo(props) {
    const { dashboard } = props
    return (
        <form className="w-9/12">
            <section className="w-6/12">
                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Full Name</p>
                        <label htmlFor="full-name" className="cursor-pointer">Edit</label>
                    </div>
                    <input type="text" id="full-name" placeholder="John Doe" className="w-full outline-none" onChange={(event) => console.log(event.target.value)}  value={`${dashboard?.first_name} ${dashboard?.last_name}`} />
                </div>

                <div className="mb-8">
                    <label className="block mb-3">Gender</label>
                    <select className="bg-transparent outline-none w-40">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div className="mb-8">
                    <label className="block mb-3">Country</label>
                    <input type="text" id="" placeholder="NG NIGERIA" onChange={(event) => console.log(event.target.value)} className="outline-none" value={dashboard?.country || 'N/A'}/>
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Phone Number</p>
                        <label htmlFor="phone-number" className="cursor-pointer">Edit</label>
                    </div>
                    <input type="text" id="phone-number" placeholder="N/A" className="outline-none border-b-[0.02px] w-full border-[#434343]" />
                </div>
            </section>

            <div className=" mb-8">
                <div className="flex justify-between items-center mb-3">
                    <p>About</p>
                    <label htmlFor="about" className="cursor-pointer">Edit</label>
                </div>
                <textarea id="about" className="outline-none h-56 bg-[#FDF8F8] resize-none w-full py-2 px-4" onChange={(event) => console.log(event.target.value)}  defaultValue={dashboard?.about_me || ''}></textarea>
            </div>

            <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white">save</button>
        </form>
    )
}
