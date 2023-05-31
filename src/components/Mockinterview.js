import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./mockinterview.css";
const Facts = () => {
  return (
    <BrowserRouter>
      <section
        id="Mockinterview"
        className="section background-primary-soft wf-section"
      >
        <div className="facts">
          <img
            src="https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions.jpg"
            loading="lazy"
            width="1000"
            sizes="(max-width: 991px) 100vw, 50vw"
            srcset="
            https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions-p-500.jpg   500w,
            https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions-p-800.jpg   800w,
            https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions-p-1080.jpg 1080w,
            https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions-p-1600.jpg 1600w,
            https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions-p-2000.jpg 2000w,
            https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/640afa543c13563175af1d23_solutions.jpg        2000w
          "
            alt="solutions"
            className="facts-image"
          />
          <div className="container">
            <div className="facts-grid">
              <div
                id="w-node-fc447acc-e5d7-6a45-4032-aca7ca736ffd-b8c484dd"
                data-w-id="fc447acc-e5d7-6a45-4032-aca7ca736ffd"
                className="facts-content"
              >
                <h1 className="display-2 margin-bottom-25">
                  Are you nervous about
                  {/* We make your spending */}
                  <span className="text-gradient text-emphasize">
                    {/* stress-free */} interviews ?
                  </span>
                  {/* for you to have the perfect control. */}
                </h1>
                <p className="paragraph margin-bottom-30">
                  Unleash Your Interview Potential with our
                  <span className="text-gradient text-emphasize">
                    {" "}
                    Mock Interview Mastery{" "}
                  </span>
                  and Elevate Your Confidence
                </p>

                <div className="flex">
                  <div className="perks">
                    <h5>
                      {" "}
                      <span className="text-gradient text-emphasize">
                        Perks of Mock Interviews Here
                      </span>
                    </h5>
                    <ul>
                      <li>Expert Interviewers</li>
                      <li>Personalized Feedback</li>
                      <li>Confidence Building</li>
                      <li>Flexible Scheduling</li>
                    </ul>
                  </div>
                  <div className="format">
                    <h5>
                      {" "}
                      <span className="text-gradient text-emphasize">
                        General format:
                      </span>
                    </h5>
                    <ul>
                      <li>Duration: 1 hour</li>
                      <li>15 mins to discuss your performance</li>
                      <li>Recording and scores will be shared</li>
                    </ul>
                  </div>
                </div>
                <Link to="#Pricing" smooth>
                  <button className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      ></path>
                    </svg>
                    <span>Check Out</span>
                  </button>
                </Link>

                <div className="numbers-grid cc-margin-top">
                  <div id="w-node-_894aa9ac-1240-38a9-f28e-a969f9df5f80-b8c484dd">
                    <h4 className="display-2 margin-bottom-none">99.7%</h4>
                    <h5 className="margin-bottom-5">Customer Satisfaction</h5>
                    <div className="rating">
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                    </div>
                  </div>
                  <div id="w-node-_894aa9ac-1240-38a9-f28e-a969f9df5f90-b8c484dd">
                    <h4 className="display-2 margin-bottom-none">4x</h4>
                    <h5 className="margin-bottom-5">New Visitors</h5>
                    <div className="rating">
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                      <div className="material-icon">star_rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default Facts;
