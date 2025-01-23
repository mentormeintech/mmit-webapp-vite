import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/footer';
import Whoweare from '../../components/WhoWeAre';
import AboutLeft from '../../components/AboutLeft';



const AboutUs = () => {
  return (
    <div>
      <Header />
      <Whoweare />
          <div className="pt-10 max-w-6xl lg:mx-auto mx-4">
              
        <AboutLeft />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs