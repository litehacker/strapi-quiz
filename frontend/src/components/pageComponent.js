import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./topMenuComponent";
// pages
const Question = lazy(() => import("../pages/quizPage.js"));
const Login = lazy(() => import("./login.component.js"));
const Register = lazy(() => import("./signup.component.js"));
const LandingPage = lazy(() => import("./landingPageComponent.js"));

const Page = () => {
  return (
    
    
      <Router>
      <Header/>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/quiz" component={Question}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Suspense>
        </Switch>
      </Router>
  );
}
export default Page;
