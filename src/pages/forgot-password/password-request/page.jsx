import React from 'react'
import ForgotPasswordHeader from '../../../components/forgotPasswordHeader'
import Footer from '../../../components/footer'
import ForgotPasswordForm from '../../../components/forgotPasswordForm'
import PasswordRequestForm from '../../../components/passwordRequestForm'

export default function PasswordRequest() {
    return (
        <>
            <div>
                <ForgotPasswordHeader title="Password Request"/>
                <div className="flex flex-col md:flex md:flex-row justify-around mx-5 mt-[5rem] mb-[10rem]">
                    <PasswordRequestForm />
                </div>
            </div>
            <div className="-mt-20">
                <Footer />
            </div>
        </>
    )
}
