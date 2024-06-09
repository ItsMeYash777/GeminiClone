import React from 'react'
import "./Header.css"
import "../../assets/assets"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="heading">
          <p className="title">Gemini</p>
          <img className="user" src={assets.user_icon} alt="" />
        </div>
        <div className="main">
          <div className="greet">
            <p>
              <span>Hello, Yash </span>
            </p>
            <p>How can I help you?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Help me, Compare these college majors </p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for work retreat </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Help me, plan a game night with my 5 freinds under 100$</p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>Provide me list of questions to prepare for my interview </p>
              <img src={assets.message_icon} alt="" />
            </div>
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder="Enter a Prompt here" />
              <div className='bottom-images'>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <div className="bottom-info">
              <p>
                Gemini may display inaccurate info, including about people, so
                double-check its responses.{" "}
                <a
                  href="https://support.google.com/gemini/answer/13594961?visit_id=638535560598063619-1016249618&p=privacy_notice&rd=1#privacy_notice"
                  
                  target="blank"
                >
                  Your privacy & Gemini Apps
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
