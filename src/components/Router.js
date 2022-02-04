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
import SignUp from "../pages/SignUp";
import KakaoRedirectHandler from "./KakaoRedirectHandler";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //아이디(userId), email, 이름, isPublic, 프사 ,닉네임(null), 로그인 타입(null)
  const [userObj, setUserObj] = useState({
    id: "",
    email: "",
    name: "",
    // isPublic: false,
    // profile: "",
    // introduce: "",
    password: "",
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

          <Route exact path="/login/oauth2/code/kakao">
            <KakaoRedirectHandler
              setIsLoggedIn={setIsLoggedIn}
              setUserObj={setUserObj}
            />
          </Route>

          {isLoggedIn ? ( //로그인 돼있으면 mymap, gallery url에서 해당 component 보여줌
            <>
              <Route exact path="/MyMap">
                <MyMap userObj={userObj} />
              </Route>
              <Route exact path="/gallery">
                <Gallery userObj={userObj} setUserObj={setUserObj} />
              </Route>
            </>
          ) : (
            //로그인 안되어 있으면 mymap, gallery url에서 home으로 redirect
            <>
              {" "}
              <Route exact path="/MyMap">
                <MyMap userObj={userObj} />
              </Route>
              <Route exact path="/gallery">
                <Gallery userObj={userObj} setUserObj={setUserObj} />
              </Route>
              {/* <Route
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
              /> */}
            </>
          )}

          <Route exact path="/about">
            <About />
          </Route>

          <Route path="/">
            <Navigation setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
