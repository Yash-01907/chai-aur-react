import { useState, useEffect } from "react";
import "./App.css";
import BookCard from "./components/Card";
import Header from "./components/Header";

function App() {
  const [res, setRes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await fetch(
        //   `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${import.meta.env.VITE_API_KEY}`
        // );
        const data = await fetch(
          `https://openlibrary.org/search.json?q=the+lord+of+the+rings`
        );
        if (!data.ok) return;
        const res = await data.json();
        console.log(res)
        console.log(res.docs[0]);
        setRes(res.docs[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Header />
      {res && <BookCard book={res} />}
    </>
  );
}

export default App;
