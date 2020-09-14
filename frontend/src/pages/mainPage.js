import React from 'react';
import FormLandingPage from "../components/formLandingPageComponent"
import Button from "react-bootstrap/Button"

function Main() {
  return (
    <div className="">
      <div className="row">
        <div className="col-sm-12 pt-0">
        <>    
          <section className="section welcome-area bg-overlay d-flex align-items-center  bg-primary">
            <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-7">
                <div className="welcome-intro">
                  <h1 className="text-white">Stay connected with your customers</h1>
                  <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.</p>
                  <Button size="lg" href="#" variant="outline-light">Click ME</Button>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-5">
                <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
                  <FormLandingPage/>
                </div>
              </div>
            </div>
          </div> 
          </section>
          <div className="shape-bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none"><path className="shape-fill" fill="#007bff" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg></div>
        </>
        </div>
      </div>
    </div>
  );
}

export default Main;
