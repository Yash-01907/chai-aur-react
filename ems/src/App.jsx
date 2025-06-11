import { useContext, useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashborad from "./components/DashBoard/EmployeeDashborad";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState("");

  const { userData } = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(() => {
  //   setLoggedInUser(localStorage.getItem("loggedInUser"));
  //   if (loggedInUser) {
  //     const userData = JSON.parse(loggedInUser);
  //     setUser(userData.role);
  //     setLoggedInUserData(userData.data);
  //   }
  // }, [loggedInUser]);
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // const handleLogin = (email, password) => {
  //   if (userData) {
  //     const admin = userData.admin.find(
  //       (adm) => adm.email == email && password == adm.password
  //     );
  //     if (admin) {
  //       setUser("admin");
  //       localStorage.setItem(
  //         "loggedInUser",
  //         JSON.stringify({ role: "admin", data: admin })
  //       );
  //     }
  //     const stored = getLocalStorage(); // always get fresh data
  //     const employee = stored.employees.find(
  //       (emp) => emp.email === email && emp.password === password
  //     );

  //     if (employee) {
  //       setUser("employee");
  //       setLoggedInUserData(employee);
  //       localStorage.setItem(
  //         "loggedInUser",
  //         JSON.stringify({ role: "employee", data: employee })
  //       );
  //     }
  //   } else if (userData) {
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };

  const handleLogin = (email, password) => {
  const stored = getLocalStorage(); // fetch latest data from localStorage
  if (stored) {
    const admin = stored.admin.find(
      (adm) => adm.email === email && adm.password === password
    );
    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
      return;
    }

    const employee = stored.employees.find(
      (emp) => emp.email === email && emp.password === password
    );
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }
  }

  alert("Invalid credentials");
};


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashborad changeUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
      {/* <EmployeeDashborad/> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
