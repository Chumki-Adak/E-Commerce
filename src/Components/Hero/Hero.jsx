import React from 'react'
import './Hero.css';
import hero_img from '../Assets/hero.jpg'
import { FaHandPointRight } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                   <FaHandPointRight size={24} color="#000" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
               
            </div>
        </div>
        <div>
            <div className="hero-right">
                <img src={hero_img} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero