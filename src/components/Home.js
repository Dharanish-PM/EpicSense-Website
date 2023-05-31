import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div id="two">
      <div id="hero" className="hero">
        <div className="hero-image-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero.jpg"
            loading="lazy"
            width="1000"
            sizes="(max-width: 991px) 100vw, 50vw"
            srcset="
              https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero-p-500.jpg   500w,
              https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero-p-800.jpg   800w,
              https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero-p-1080.jpg 1080w,
              https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero-p-1600.jpg 1600w,
              https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero-p-2000.jpg 2000w,
              https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640880ffdacfd33c1f6ea52f_hero.jpg        2000w
            "
            alt="flux office"
            className="hero-image"
          />
          <div
            data-w-id="54174dcc-aea1-b483-3b76-af7c93538bcd"
            style={{ opacity: "1" }}
            className="play"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAdlWW4Sh5_jb-be7djxOK7yKzzbsEAYwei19w1f9RTFffaQ/viewform"
              className="play-button w-inline-block w-lightbox rr"
              style={{ background: "#1b2430", color: "#00ffff" }}
              aria-label="open lightbox"
              aria-haspopup="dialog"
            >
              <div
                className="play-button-pulse"
                style={{
                  opacity: "0.7",
                  background: "#1b2430",
                  width: "99.9117px",
                  height: "99.9117px",
                  willChange: "opacity, width, height",
                }}
              ></div>
              <div className="material-ico " style={{ fontSize: "0.8rem" }}>
                Register
              </div>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="display-1 margin-bottom-20 intro">
                We pioneer with cutting edge
                <span className="text-gradient text-emphasize purple">
                  technologies
                </span>
                delivering solutions that redefine efficiency
              </h1>
              <p className="paragraph-large ll">
                We immerse you in real world projects, fostering hands-on
                learning, embracing invaluable mentorship from industry experts,
                propelling your professional growth.
              </p>

              <img
                src="https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/64088dfd55b652dcf8126b5d_doodle2.svg"
                loading="lazy"
                height="70"
                style={{
                  opacity: "1",
                  left: "31rem",
                  bottom: "3rem",
                  position: "relative",
                }}
                data-w-id="62c94f9a-5b09-7cb4-88d8-b76cbdfdc2cc"
                alt=""
                className="doodle-arrow"
              />
              <div className="paragraph-large">
                {/* <a href="#" className="button cc-large w-button">
                  Get Started
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
