import React from 'react'
import ForgotPasswordHeader from '../../components/forgotPasswordHeader'
import Footer from '../../components/footer'
import ForgotPasswordForm from '../../components/forgotPasswordForm'


export default function ForgotPassword() {
    return (
        <>
            <div>
                <ForgotPasswordHeader />
                <div className="flex flex-col md:flex md:flex-row justify-around mx-5 mt-[5rem] mb-[10rem]">
                    <ForgotPasswordForm />
                </div>
            </div>
            <div className="-mt-20">
                <Footer />
            </div>
        </>
    )
}
