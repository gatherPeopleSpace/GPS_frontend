import React from 'react';
import {Redirect, HashRouter as Router, Route, Switch} from "react-router-dom"
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import About from "../routes/About";
import Navigation from "./Navigation"

const AppRouter = ()=>{
    return( 
        <Router>
            <Switch>
                    <> 
                        <>
                            <Route exact path="/"><Navigation/><Home/></Route>
                            <Route exact path="/auth"><Navigation/><Auth /></Route>
                            <Route exact path="/about"><Navigation/><About /></Route>
                        </>
                        <Route exact path="/profile"><Profile/></Route>
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
}
export default AppRouter;