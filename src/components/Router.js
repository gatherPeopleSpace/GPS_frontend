import React, { useState, useEffect } from "react";
import {
  Redirect,
  HashRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import MyMap from "../pages/MyMap";
import Navigation from "../pages/Navigation";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userObj, setUserObj] = useState({
    id: "",
    password: "",
    email: "",
    name: "",
    // isPublic: false,
    // profile: "",
    // introduce: "",
  });

  useEffect(() => {
    try {
      const tokenCheck = localStorage.getItem("token");
      if (!tokenCheck) {
        setIsLoggedIn(false);
        return;
      } else {
        setIsLoggedIn(true);
        console.log(tokenCheck);
      }
    } catch (e) {
      console.log("localStorage is not working");
    }
  }, []);

  return (
    <BrowserRouter>
      <Navigation setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Switch>
        <>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home">
            <Home userObj={userObj} setUserObj={setUserObj} />
          </Route>

          <Route exact path="/login">
            <LogIn
              userObj={userObj}
              setUserObj={setUserObj}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>

          <Route exact path="/signup">
            <SignUp
              userObj={userObj}
              setUserObj={setUserObj}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>

          {localStorage.getItem("token") ? ( //로그인 돼있으면 mymap, gallery url에서 해당 component 보여줌
            <>
              <Route exact path="/MyMap">
                <MyMap userObj={userObj} setUserObj={setUserObj} />
              </Route>
              <Route exact path="/gallery">
                <Gallery userObj={userObj} setUserObj={setUserObj} />
              </Route>
            </>
          ) : (
            //로그인 안되어 있으면 mymap, gallery url에서 home으로 redirect
            <>
              <Route
                exact
                path="/MyMap"
                render={() => {
                  return <Redirect to="/home" />;
                }}
              />
              <Route
                exact
                path="/gallery"
                render={() => {
                  return <Redirect to="/home" />;
                }}
              />
            </>
          )}

          <Route exact path="/about">
            <About />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
