import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const googleBooks = async () => {
    try {
      const response = await fetch(
        // "https://www.googleapis.com/books/v1/volumes?q=intitle:powerless&key=AIzaSyDRpnfoyRKZLZ9R_2aSDy2qFCnME4rUUb8"
        "https://www.googleapis.com/books/v1/volumes/o-rsEAAAQBAJ"
      );
      if (response) {
        const res = await response.json()
        console.log(res);
        console.log(res.items[0].volumeInfo.description);
      }
    } catch (error) {
      console.log(error);
    }
  };

  googleBooks()

  return (
    <>
      <Header/>
    </>
  );
}

export default App;
