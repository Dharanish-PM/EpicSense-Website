import React from "react";
import "./footer.css";
import img from "../images/finallogo.webp";
const Footer = () => {
  return (
    <div id="Footer" className="footer background-dark">
      <div className="container">
        <div className="footer-cta">
          <div className="firstcon">
            <div className="">
              <img
                src={img}
                loading="lazy"
                className="logoneww margin-bottom-20"
              />
              <div className="margin-bottom-20">
                © Epic Sense Technologies <br />
              </div>
              <div className="social-links-wrapper">
                <ul role="list" className="social-links w-list-unstyled">
                  {/* <li className="social-link-item">
                    <a href="#" className="social-link w-inline-block">
                      <div className="unicon"></div>
                    </a>
                  </li> */}
                  {/* <li className="social-link-item">
                    <a href="#" className="social-link w-inline-block">
                      <div className="unicon"></div>
                    </a>
                  </li> */}
                  <li className="social-link-item">
                    <a
                      href="https://www.linkedin.com/in/epicsense-technologies-bb0260278/"
                      className="social-link w-inline-block"
                    >
                      <div className="unicon"></div>
                    </a>
                  </li>
                  <li className="social-link-item">
                    <a
                      href="https://www.instagram.com/epicsense_technologies/"
                      className="social-link w-inline-block"
                    >
                      <div className="unicon"></div>
                    </a>
                  </li>
                  {/* <li className="social-link-item">
                    <a href="#" className="social-link w-inline-block">
                      <div className="unicon"></div>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="middle y">
            <h4 className="text-white">Get in Touch</h4>
            <div className="address margin-bottom-20 ">
              11, 8th cross, Arumugam layout, Peelamedu, Coimbatore -641004
            </div>
            <a href="#" className="link-hover link-white middle fontchangee">
              admin@epicsense.co
            </a>
            <div>(+91) 9489232330</div>
          </div>
          <div className="join">
            <h2 className="display-5 text-white">
              Join our community of like-minded individuals to advance together.
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-mvelFGYA46k1M5hOqcG0w-HKYik1TVpB_du5cFq2J3siYg/viewform">
                <div className="button w-button footbtn">
                  Request a Callback
                </div>
              </a>
            </h2>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-grid">
          {/* <div id="w-node-_11e2dc3d-d1e1-458c-44c2-5749cd8efbcf-cd8efba7">
            <h4 className="text-white">Get in Touch</h4>
            <div className="address margin-bottom-20">
              Moonshine St. 14/05 London, United Kingdom
            </div>
            <a href="#" className="link-hover link-white">
              info@email.com
            </a>
            <div>00 (123) 456 78 90</div>
          </div> */}
          <div id="w-node-_11e2dc3d-d1e1-458c-44c2-5749cd8efbd8-cd8efba7">
            {/* <h4 className="text-white">Template</h4>
            <ul role="list" className="unordered-list margin-bottom-none">
              <li>
                <a
                  href="/template/style-guide"
                  className="link-hover link-white"
                >
                  Style Guide
                </a>
              </li>
              <li>
                <a href="/404" className="link-hover link-white">
                  404
                </a>
              </li>
              <li>
                <a href="/template/license" className="link-hover link-white">
                  Licensing
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
