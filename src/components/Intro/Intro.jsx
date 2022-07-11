import React from 'react';
import "./Intro.css";
import me from "../../img/SaloniPic.png"

const Intro = () => {
  return (
    <div className='i'>
       <div className="i-left">
        <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, My name is </h2>
            <h1 className='i-name'>Saloni Mukesh Oswal</h1>
            <div className='i-title'>
                <div className='i-title-wrapper'>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Front End Developer</div>
                    <div className="i-title-item">Full Stack Developer</div>
                    <div className="i-title-item">.Net Developer</div>
                    <div className="i-title-item">Business Tech Analyst</div>
                </div>
            </div>
            <p className="i-desc">
                I completed my Undergraduation from Dr. Vishwanath Karad's MIT World Peace University in 2021. I was working at Deloitte USI as a Business Technology Analyst. I am a Web Development Enthusiast.
            </p>
        </div>
       </div>
       <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
       </div>
        </div>
  )
}

export default Intro;