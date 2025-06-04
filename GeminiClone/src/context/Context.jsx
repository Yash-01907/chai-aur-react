import { createContext, useState } from "react";
import main from "../config/gemini";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

const newChat=()=>{
  setLoading(false)
  setShowResult(false);

}

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    if (prompt !== undefined) {
      response = await main(prompt);
      setRecentPrompt(prompt);
    } else {
      setRecentPrompt(input);
      setPrevPrompts((prev) => [...prev, input]);
      response = await main(input);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("<br/>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      delayPara(i, newResponseArray[i] + " ");
    }
    setLoading(false);
    // setInput("");
  };
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 50 * index);
  };

  const contextValue = {
    newChat,
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default ContextProvider;
