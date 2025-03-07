import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className = 'hero'>

        <div className="hero-left">
            <h2>AI-Driven </h2>
            <div>  
                <h1>E-Commerce </h1>
                <p>With virtual Trial Experience</p>
            </div>
            <a href="/womens"><button className='trybutton'  >Try Now</button></a>
        </div>

      <div className="hero-right">
      <img src={hero_image} alt="" />
      </div>


    </div>
  )
}

export default Hero
