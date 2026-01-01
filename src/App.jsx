import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import PortfolioCreator from "./PortfolioCreater";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("home");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      
      <Navbar isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setPage={setPage}/>

      {page === "home" && <Home/>}
      {page === "login" &&  <Login setIsLoggedIn={setIsLoggedIn} />}
      {page === "portfolio" && isLoggedIn && <PortfolioCreator/>}
    </>
  );
}

export default App;