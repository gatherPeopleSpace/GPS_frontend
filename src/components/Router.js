import React, { useState } from "react";
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
import KakaoRedirectHandler from "./KakaoRedirectHandler";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //아이디(userId), email, 이름, isPublic, 프사 ,닉네임(null), 로그인 타입(null)
  const [userObj, setUserObj] = useState({
    userId: "",
    email: "",
    name: "",
    isPublic: "",
    profile: "",
    introduce: "",
  });
  return (
    <BrowserRouter>
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
            <Home />
          </Route>

          <Route exact path="/login">
            <LogIn setIsLoggedIn={setIsLoggedIn} setUserObj={setUserObj} />
          </Route>

          <Route exact path="/login/oauth2/code/kakao">
            <KakaoRedirectHandler
              setIsLoggedIn={setIsLoggedIn}
              setUserObj={setUserObj}
            />
          </Route>

          <Route exact path="/MyMap">
            <MyMap userObj={userObj} />
          </Route>
          <Route exact path="/gallery">
            <Gallery userObj={userObj} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route path="*">
            <Navigation setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
