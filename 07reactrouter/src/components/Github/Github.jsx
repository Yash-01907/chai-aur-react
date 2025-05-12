import React, { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/yash-01907")
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-3 text-3xl ">
      Github followes: {data.followers}
      <img  src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async function(){
    const data = await fetch('https://api.github.com/users/yash-01907')
    return data.json()

    
}