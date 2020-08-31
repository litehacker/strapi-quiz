import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./topMenuComponent";
import Spinner from 'react-bootstrap/Spinner';

// pages
const Question = lazy(() => import("../pages/quizPage.js"));
const Login = lazy(() => import("./login.component.js"));
const Register = lazy(() => import("./signup.component.js"));
const LandingPage = lazy(() => import("../pages/mainPage.js"));
const _404Component = lazy(() => import("../pages/_404Page.js"));
const Hakkimizda = lazy(() => import("../pages/hakkımızdaPage.js"));
const Contact = lazy(() => import("../pages/contactPage.js"));
const ForgotPassword = lazy(() => import("../pages/forgotPasswordPage.js"));
const Profile = lazy(() => import("./profile.component.js"));

const Page = () => {
  return (
    <Router>
      <Header/>
      <Suspense fallback={
        <div className="d-flex justify-content-center py-5">
          <Spinner animation="border" role="status" variant="primary">
              <span className="sr-only">Yükleniyor...</span>
          </Spinner>
        </div>
      }>
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/deneme-sınavı" component={Question}/>
            <Route path="/hakkımızda" component={Hakkimizda }/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/bize-ulaş" component={Contact}/>
            <Route path="/şifremi-unuttum" component={ForgotPassword}/>
            <Route path="/profil" component={Profile}/>
            <Route path='*' exact={true} component={_404Component} />

        </Switch>
      </Suspense>
    </Router>
  );
}
export default Page;