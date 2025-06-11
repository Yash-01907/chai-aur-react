import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email is ${email} and password is ${password}`);
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className=" border-2 border-emerald-600 p-20 rounded-2xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-2 placeholder:text-gray-400 text-lg text-black outline-none bg-transparent px-6 rounded-full font-medium "
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="font-medium border-2 mt-3 border-emerald-600 py-2 placeholder:text-gray-400 text-lg text-black outline-none bg-transparent px-6 rounded-full "
            type="password"
            placeholder="Enter password"
          />
          <button className=" bg-emerald-600 py-2 placeholder:text-white text-xl text-black outline-none border-none mt-5 px-8 w-full rounded-full hover:bg-emerald-700 ">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
