import React, { useState } from "react";
import {
  Redirect,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import MyMap from "../pages/MyMap";
import Navigation from "../pages/Navigation";
import LogIn from "../pages/LogIn";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //아이디(userId), email, 이름, isPublic, 프사 ,닉네임(null), 로그인 타입(null)
  const [userObj, setUserObj] = useState();
  return (
    <Router>
      <Switch>
        <>
          <>
            <Route exact path="/">
              <Home />
              <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
            </Route>
            <Route exact path="/MyMap">
              <MyMap userObj={userObj} />
              <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
            </Route>
            <Route exact path="/gallery">
              <Gallery userObj={userObj} />
              <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
            </Route>
            <Route exact path="/about">
              <About />
              <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
            </Route>
            <Route exact path="/login">
              <LogIn setIsLoggedIn={setIsLoggedIn} setUserObj={setUserObj} />
              <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
            </Route>
          </>
          <Redirect from="*" to="/" />
        </>
      </Switch>
    </Router>
  );
};
export default AppRouter;
