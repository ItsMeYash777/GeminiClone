import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { Sent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const toggleMenu = () => setExtended(!extended);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await Sent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu">
          <img onClick={toggleMenu} src={assets.menu_icon} alt="" />
        </div>
        <div onClick={()=> newChat()} className="plus">
          <img src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                className="recent-entry"
                key={index}
              >
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        {[
          { icon: assets.question_icon, text: "Help" },
          { icon: assets.history_icon, text: "History" },
          { icon: assets.setting_icon, text: "Settings" },
        ].map((item, index) => (
          <div className="bottom-item recent-entry" key={index}>
            <img src={item.icon} alt="" />
            {extended && <p>{item.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
