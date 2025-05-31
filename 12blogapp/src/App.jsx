import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header,Footer } from "./components";
import { Outlet } from "react-router-dom";


function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between justify-center bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          {/* TODO:Outlet */}
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
