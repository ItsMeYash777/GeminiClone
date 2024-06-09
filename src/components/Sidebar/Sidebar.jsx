import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const [Extended, setExtened] = useState(false)

  function toggleMenu(){
    setExtened(!Extended)
  }
  return (
    <div>
      <div className="sidebar">
        <div className="top">
          <div className="menu">
            <img onClick={toggleMenu}src={assets.menu_icon} alt="" />
          </div>
          <div className="plus">
            <img src={assets.plus_icon} alt="" />
            {Extended ? <p>New Chat</p> : null}
          </div>
          {Extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is React....</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {Extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {Extended ? <p>History</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {Extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
