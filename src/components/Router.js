import React from "react";
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
  const flag = false;
  return (
    <Router>
      <Switch>
        <>
          <>
            <Route exact path="/">
              <Home />
              <Navigation />
            </Route>
            <Route exact path="/MyMap">
              <MyMap />
              <Navigation />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
              <Navigation />
            </Route>
            <Route exact path="/about">
              <About />
              <Navigation />
            </Route>
            <Route exact path="/login">
              <LogIn />
              <Navigation />
            </Route>
          </>
          <Redirect from="*" to="/" />
        </>

        {/* {flag? (
                    <> 
                        <Route exact path="/"><Home/></Route>
                        <Route exact path="/profile"><Profile/></Route>
                        <Redirect from="*" to="/" />
                    </>
                ) : (
                    <>
                        <Route exact path="/Auth"><Auth /></Route>
                        <Redirect from="*" to="/" />
                    </>
                )} */}
      </Switch>
    </Router>
  );
};
export default AppRouter;
