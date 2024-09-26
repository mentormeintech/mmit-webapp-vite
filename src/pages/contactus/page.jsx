import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import svgRight from './svgright.svg';
import svgLeft from './svgleft.svg';
import ContactInput from './ContactInput'
import Button from '../../components/Button'
import { SocialContainer, SocialCircle } from '../../styled/component';

export default function ContactUs() {
  return (
    <>
      <Header />
      {/* Banner Section */}
      <div className='w-full lg:h-[45rem] relative'>
        <img className='mt-0 w-full h-auto lg:h-full object-cover' src='https://s3-alpha-sig.figma.com/img/27d0/2157/00d5476fe2ef83bb1a873ece17ee4973?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DJx-6hANrUB6v5nWsHUpKybNfdEyPhb1Oo20kWtM8ZiY41NDaQH6fXm5hcaM6p-T55IIK8kqPsyWgssY1CrcjEN~3BYjBeHNnoKG7RKNh6kiEKYJAKDV5i9Wia7JyEeBDCVtdfZQB5yb5orJmaILLTYDJ2T8h5KQ7PNgAxrdMGk87uwgn2~eiaWmC02amoS7ULuDVrE-eCaN0dGk6NQg~sVR2rlyeeUr1OP~4RE76NLHeBvHCQn1qtvT4VRb~BE50H6-r1HHUiUgZqG6LBxOsuf-KLP2rjJ1L-UBQkYunmRDC5yWaZIDWSCnLxldS6HvHNd9ITmZSrMQmH93MmIr-g__' />
        <div className="absolute inset-0 pl-[3rem] pt-[5rem] sm:pt-[15rem] bg-[rgba(69,69,69,0.6)] flex flex-col">
          <h2 className="font-[600] text-[#fff] text-[1.25rem] leading-[4rem] sm:text-[2.25rem] sm:leading-[2rem]">Contact Us</h2>
          <span className="font-[300] text-[#fff] text-[1rem] leading-[1.5rem] sm:[1.25rem]">Empowering Tech Futures Through Partnership</span>
        </div>
        {/* <div className="absolute inset-0 sm:pl-4 md:pl-8 lg:pl-[3rem] sm:pt-8 md:pt-12 lg:pt-[15rem] bg-[rgba(69,69,69,0.6)] flex flex-col">
          <h2 className="font-[600] text-[#fff] text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] leading-[2rem] sm:leading-[3rem] md:leading-[4rem]">
            Contact Us
          </h2>
          <span className="font-[300] text-[#fff] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] leading-[1.2rem] sm:leading-[1.5rem]">
            Empowering Tech Futures Through Partnership
          </span>
        </div> */}

      </div>
      {/* Form section */}
      <div className='w-full pb-[12rem] relative flex flex-col items-center justify-center'>
        <img src={svgLeft} className='absolute top-[-1.2rem] bottom-0 left-0 z-[-1] h-[40rem]' alt="svgLeft" />
        <h1 className="w-[70%] mt-[5rem] mb-[2.5rem] font-[400] text-[rgba(0, 0, 0, 1)] text-[1.8rem] leading-[3rem] sm:text-[2.9rem] sm:font-[500] sm:leading-[4rem]">
          We’d Love to Hear From You
        </h1>



        <div className="w-full sm:w-[90%] md:w-[80%] flex flex-col lg:flex-row">
          <form className="w-[90%] lg:w-[47%] flex flex-col mx-auto my-[1rem]">
            <ContactInput title="Name" placeholder='Your name' />
            <ContactInput title="Email" placeholder='Your email address' />
            <ContactInput title="Message" placeholder='Your Message' textarea />
            <Button name={"Send"} className="rounded-md mt-[1rem] bg-[#F89878] w-[30%] py-[.5rem] text-[#fff] font-[600] text-[1.25rem] self-center mt-[4.02rem]" />
          </form>

          <div className="w-full lg:w-[40%] flex flex-col my-[1rem] items-center justify-start">
            <div className="flex flex-col space-y-2">
              <SocialContainer>
                <SocialCircle width={'2.1rem'} height={'2.1rem'} right={'1rem'}>
                  <i className="fa-solid fa-envelope text-[#454545] text-[1.3rem]"></i>
                </SocialCircle>
                <span>mentormeintech@gmail.com</span>
              </SocialContainer>

              <SocialContainer>
                <SocialCircle width={'2.1rem'} height={'2.1rem'} right={'1rem'}>
                  <i className="fa-solid fa-location-dot text-[#454545] text-[1.3rem]"></i>
                </SocialCircle>
                <span>+2349135245625</span>
              </SocialContainer>

              <SocialContainer>
                <SocialCircle width={'2.1rem'} height={'2.1rem'} right={'1rem'}>
                  <i className="fa-solid fa-phone text-[#454545] text-[1.3rem]"></i>
                </SocialCircle>
                <span>Lagos, Nigeria</span>
              </SocialContainer>
            </div>

            <div className='ml-[.7rem] mt-[0.8rem] flex flex-row justify-start sm:justify-center sm:justify-center'>
              <SocialCircle width={'2rem'} height={'2rem'}>
                <i className="fa-brands fa-linkedin-in text-[#454545] text-[1.3rem]"></i>
              </SocialCircle>
              <SocialCircle width={'2rem'} height={'2rem'}>
                <i className="fa-brands fa-twitter text-[#454545] text-[1.3rem]"></i>
              </SocialCircle>
              <SocialCircle width={'2rem'} height={'2rem'}>
                <i className="fa-brands fa-youtube text-[#454545] text-[1.3rem]"></i>
              </SocialCircle>
              <SocialCircle width={'2rem'} height={'2rem'}>
                <i className="fa-brands fa-instagram text-[#454545] text-[1.3rem]"></i>
              </SocialCircle>
            </div>

            <img src={svgRight} className='absolute bottom-0 h-[40rem] right-0 z-[-1]' alt="svgRight" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
