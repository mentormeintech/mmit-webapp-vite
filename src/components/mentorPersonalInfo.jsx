import { useState, useRef } from 'react'
import UserInlineInput from './userInlineInput'
import DefaultInput from './defaultInput'
import Alert from '../features/Alert';

export default function MentorPersonalinfo(props) {
    const { dashboard, onSubmit } = props

    const [formData, setFormData] = useState({
        first_name: `${dashboard?.first_name}`,
        last_name: `${dashboard?.last_name}`,
        country: dashboard?.country || '',
        gender: dashboard?.gender || '',
        mobile: dashboard?.mobile || '',
        about_me: dashboard?.about_me || '',
    });

    const handleChange = (event) => {
        try {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });
        } catch (error) {
            Alert(error.message, 'error')
        }
    };
    // console.log("dashboard", dashboard)

    async function submitForm(event) {
        event.preventDefault()
        onSubmit(formData);
    }
    const inputRef = useRef(null);
    return (
        <form className="w-9/12">
            <section className="w-6/12">
                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>First Name</p>
                        {/* <label htmlFor="full-name" className="cursor-pointer">Edit</label> */}
                    </div>
                    <DefaultInput ref={inputRef} type="text" id="first_name" placeholder="First name"
                        value={formData.first_name}
                        onChange={handleChange}
                        editable="false" />
                    {/* <UserInlineInput type="text" id="full-name" placeholder="John Doe" className="w-full outline-none" value={`${dashboard?.first_name} ${dashboard?.last_name}`} 
                        editable="false"/> */}
                    {/* <input type="text" id="full-name" placeholder="John Doe" className="w-full outline-none" onChange={(event) => console.log(event.target.value)}  value={`${dashboard?.first_name} ${dashboard?.last_name}`} /> */}
                </div>
                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Last Name</p>
                    </div>
                    <DefaultInput ref={inputRef} type="text" id="last_name" placeholder="Last name"
                        value={formData.last_name}
                        onChange={handleChange}
                        editable="false" />
                </div>

                <div className="mb-8">
                    <label className="block mb-3">Gender</label>
                    <select
                        className="bg-transparent outline-none w-full border-b-[0.02px] border-b-[#434343] box-shadow-none px-2 mb-5"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>

                <div className="mb-8">
                    <label className="block mb-3">Country</label>
                    <DefaultInput ref={inputRef} type="text" editable="false" id="" placeholder="Country" value={formData.country}
                        name="country"
                        onChange={handleChange} />
                </div>

                <div className="w-full mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <p>Phone Number</p>
                        <label htmlFor="mobile" className="cursor-pointer">Edit</label>
                    </div>
                    <DefaultInput ref={inputRef} type="text" id="mobile" placeholder="Phone Number"
                        value={formData.mobile}
                        name="mobile"
                        onChange={handleChange} />
                </div>
            </section>

            <div className=" mb-8">
                <div className="flex justify-between items-center mb-3">
                    <p>About</p>
                    <label htmlFor="about_me" className="cursor-pointer">Edit</label>
                </div>
                <textarea id="about_me" className="outline-none h-56 bg-transparent resize-none w-full py-2 px-4" value={formData.about_me}
                    name="about_me"
                    onChange={handleChange}></textarea>
            </div>

            <button className="bg-[#FE9B7E] rounded-md w-96 h-11 text-white" onClick={submitForm}>save</button>
        </form>
    )
}
