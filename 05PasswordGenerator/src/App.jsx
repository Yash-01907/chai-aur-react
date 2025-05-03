import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  //Without using refernce of password 
  // const copyPasswordToClipboard=function(){
  //   window.navigator.clipboard.writeText(password)
  // }
//With  using reference of password

  const copyPasswordToClipboard =useCallback(()=>{
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,password.length)
  window.navigator.clipboard.writeText(password)
    
  },[password])

/**
 useCallback is used to change your function whenever anything on which your function is depended on is changed. They are called dependencies. useCallback returns a cached function back.
 */

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*(){}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str[char];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);


/**
 * useEffect is used to whenever we want to render something on our first render and after any of the dependencies mentioned in useEffect are changed.
 */

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="gap-x-2 text-sm flex">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
