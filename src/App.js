import React, { useState, useEffect } from "react";
import {
  Navbar,
  Home,
  About,
  Internships,
  Testimonials,
  Products,
  Mockinterview,
  Services,
  Pricing,
  Footer,
} from "./components";
import "./App.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import InternPage from "./pages/InternPage.js";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="parentloader">
          <ClimbingBoxLoader
            className="loader"
            color={"#00ffff"}
            loading={loading}
            size={30}
          />
        </div>
      ) : (
        <BrowserRouter>
          <Route exact path="/">
            <div className="">
              <header className="">
                <Navbar></Navbar>
                <Home></Home>
                <About></About>
                <Internships></Internships>
                {/* <Testimonials></Testimonials> */}
                <Products></Products>
                <Services></Services>
                <Mockinterview></Mockinterview>

                <Pricing></Pricing>
                <Footer></Footer>
              </header>
            </div>
          </Route>
          <Route path="/InternPage/:slug">
            <InternPage></InternPage>
          </Route>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
