import React from 'react'
import UserInlineInput from './userInlineInput'
import DefaultInput from './defaultInput'

export default function MentorPersonalinfo(props) {
    const { dashboard, onSubmit } = props
    const inputRef = React.useRef(null);
    return (
        <form className="w-9/12">
            <section className="w-6/12">
                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Full Name</p>
                        {/* <label htmlFor="full-name" className="cursor-pointer">Edit</label> */}
                    </div>
                    <DefaultInput ref={inputRef} type="text" id="full-name" placeholder="Full name" value={`${dashboard?.first_name} ${dashboard?.last_name}`}
                        editable="false" />
                    {/* <UserInlineInput type="text" id="full-name" placeholder="John Doe" className="w-full outline-none" value={`${dashboard?.first_name} ${dashboard?.last_name}`} 
                        editable="false"/> */}
                    {/* <input type="text" id="full-name" placeholder="John Doe" className="w-full outline-none" onChange={(event) => console.log(event.target.value)}  value={`${dashboard?.first_name} ${dashboard?.last_name}`} /> */}
                </div>

                <div className="mb-8">
                    <label className="block mb-3">Gender</label>
                    <select
                        className="bg-transparent outline-none w-full border-b-[0.02px] border-b-[#434343] box-shadow-none px-2 mb-5"
                    >
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div className="mb-8">
                    <label className="block mb-3">Country</label>
                    <DefaultInput ref={inputRef}  type="text" editable="false" id="" placeholder="Country" onChange={(event) => console.log(event.target.value)} value={dashboard?.country || 'N/A'} />
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Phone Number</p>
                        <label htmlFor="phone-number" className="cursor-pointer">Edit</label>
                    </div>
                    <DefaultInput ref={inputRef}  type="text" id="phone-number" placeholder="Phone Number" />
                </div>
            </section>

            <div className=" mb-8">
                <div className="flex justify-between items-center mb-3">
                    <p>About</p>
                    <label htmlFor="about" className="cursor-pointer">Edit</label>
                </div>
                <textarea id="about" className="outline-none h-56 bg-transparent resize-none w-full py-2 px-4" onChange={(event) => console.log(event.target.value)} value={dashboard?.about_me || ''}></textarea>
            </div>

            <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white">save</button>
        </form>
    )
}
