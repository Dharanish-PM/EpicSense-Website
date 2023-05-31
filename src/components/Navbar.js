import React, { useState } from "react";
import "./navbar.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import img from "../images/finallogo.webp";
const Navbar = () => {
  const [state, setstate] = useState(false);
  const handleClick = () => {
    setstate(!state);
  };

  const addclass = (e) => {
    const sideNav = document.querySelector("#navbar");
    if (sideNav.classList.contains("active")) {
      setstate(!state);
    }

    const navEle = document.querySelectorAll(".navele");
    navEle.forEach((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  };
  return (
    <BrowserRouter>
      <nav>
        <a href="/">
          <img
            src={img}
            alt=""
            id="imagelogo"
            width="100"
            height="100"
            viewBox="0 0 40 41"
            fill="none"
          />
        </a>
        <div>
          <ul
            id="navbar"
            className={state === false ? "#navbar" : "#navbar active"}
          >
            <li>
              <Link
                onClick={addclass}
                to="#hero"
                smooth
                className="active navele"
              >
                Home
              </Link>
            </li>
            <li>
              <Link onClick={addclass} className="navele" to="#About" smooth>
                About Us
              </Link>
            </li>
            <li>
              <Link
                onClick={addclass}
                className="navele"
                to="#Internships"
                smooth
              >
                Internships
              </Link>
            </li>
            <li>
              <Link onClick={addclass} to="#Products" smooth className="navele">
                Products
              </Link>
            </li>
            <li>
              <Link onClick={addclass} to="#Services" smooth className="navele">
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={addclass}
                to="#Mockinterview"
                smooth
                className="navele"
              >
                Interview
              </Link>
            </li>

            <li>
              <Link onClick={addclass} to="#Footer" smooth className="navele">
                Contact
              </Link>
            </li>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAdlWW4Sh5_jb-be7djxOK7yKzzbsEAYwei19w1f9RTFffaQ/viewform"
              className="button reg cc-small w-button"
            >
              Register
            </a>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i
            id="bar"
            className={state === true ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
