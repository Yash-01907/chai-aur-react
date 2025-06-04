import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = React.useContext(context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Yash</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to visit in India</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly explain the concept of quantum computing</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>How to make a perfect cup of coffee</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>What are the latest advancements in AI</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />

              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input.length > 0 ? (
                <img
                  onClick={() => {
                    onSent();
                    setInput("");
                  }}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may generate inaccurate or offensive information Always
            verify the information from trusted sources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
