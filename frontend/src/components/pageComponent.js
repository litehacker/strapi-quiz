import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./topMenuComponent";
import Spinner from 'react-bootstrap/Spinner';

// pages
const Question = lazy(() => import("../pages/quizPage.js"));
const Login = lazy(() => import("./login.component.js"));
const Register = lazy(() => import("./signup.component.js"));
const LandingPage = lazy(() => import("./landingPageComponent.js"));
const _404Component = lazy(() => import("../pages/_404Page.js"));

const Page = () => {
  return (
    <Router>
      <Header/>
      <Suspense fallback={
        <Spinner animation="border" role="status">
            <span className="sr-only">Yükleniyor...</span>
        </Spinner>}>
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/quiz" component={Question}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path='*' exact={true} component={_404Component} />

        </Switch>
      </Suspense>
    </Router>
  );
}
export default Page;
