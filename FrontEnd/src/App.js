import Headers from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import RegE from "./components/RegE/RegE";
import Login from "./components/Login/Login";
import LoginE from "./components/LoginE/LoginE";
import { AuthContext } from "./context/authcontext";
import { useCallback, useId, useState, useEffect } from "react";
import Search from "./components/Home/search";
import Addprevjobs from "./components/LandingPage/Addprevjobs";
import Addcurrjobs from "./components/Progress/Addcurrjobs";
import Landingpage from "./components/LandingPage/Landingpage";
import LandingEmployer from "./components/LandingEmployer/LandingEmployer";
import Profile from "./components/Profile/profile";
// import Formd from "./components/Formd/Formd";
import Formd from "./components/LandingPage/Formd";
import Images from "./components/Images/Images";

import Progress from "./components/Progress/Progress";
import Newsearch from "./components/newsearch/newsearch";
import Registertech from "./nontechcomponents/Registertech/Register";
import Logintech from "./nontechcomponents/Logintech/Login";
import { HomeContext } from "./context/homecontext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [userId, setuserId] = useState("");
  const [userNumber, setuserNumber] = useState(0);

  const login = useCallback((uid) => {
    localStorage.setItem("userid", uid);
    setIsLoggedIn(true);
    setuserId(localStorage.getItem("userid"));
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(0);
  }, []);

  useEffect(() => {
    if (localStorage.hasOwnProperty("userid")) {
      setuserId(localStorage.getItem("userid"));
      setIsLoggedIn(true);
    }
  }, []);

  
  const ologin = useCallback((un) => {
    console.log(un)
    localStorage.setItem("userNumber", un);
    setLoggedIn(true);
    setuserNumber(localStorage.getItem("userNumber"));
  }, []);

  const ologout = useCallback(() => {
    setLoggedIn(false);
    setuserNumber(0);
  }, []);

  useEffect(() => {
    if (localStorage.hasOwnProperty("userNumber")) {
      setuserNumber(localStorage.getItem("userNumber"));
      setLoggedIn(true);
    }
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Home"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route path="/landingpage" element={<Landingpage />}></Route>
          <Route path="/landingEmployer" element={<LandingEmployer />}></Route>
          <Route path="/newsearch" element={<Newsearch />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route exact path="/formd" element={<Formd />}></Route>

          <Route
            exact
            path="/addpreviousjobs"
            element={<Addprevjobs />}
          ></Route>
          <Route exact path="/addcurrjobs" element={<Addcurrjobs />}></Route>
          <Route exact path="/progresstrack" element={<Progress />}></Route>
        </Routes>
      </Router>
    );
  } else {
    routes = (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Home"
            element={
              <>
                <Headers />
      
                <Search />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/loginemployer" element={<LoginE/>}></Route>
          <Route exact path="/formd" element={<Formd />}></Route>
          <Route exact path="/images" element={<Images />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/registertech" element={<Registertech />}></Route>
          <Route exact path="/logintech" element={<Logintech />}></Route> 
          <Route exact path="/registeremployer" element={<RegE/>}></Route>
          <Route path="/newsearch" element={<Newsearch />}></Route>
          
        </Routes>
      </Router>
    );
  }
  return (
    <>
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <main>{routes}</main>
    </AuthContext.Provider>
<HomeContext.Provider
    value={{
      LoggedIn: LoggedIn,
      userNumber: userNumber,
      ologin: ologin,
      ologout: ologout,
    }} >

</HomeContext.Provider>
</>
  );
}

export default App;
