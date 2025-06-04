import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";
function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts,newChat, setRecentPrompt } = React.useContext(context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((prompt, index) => (
              <div onClick={()=>loadPrompt(prompt)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{prompt.slice(0, 15)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
