import React from "react";
import "./InternPage.css";
import { useParams } from "react-router-dom";
import data from "../data/data";
import Footer from "../components/Footer";

const InternPage = () => {
  const { slug } = useParams();
  const ind = parseInt(slug);

  var Outcomes_of_this_Internship = data[ind].Outcomes_of_this_Internship.map(
    (item, index) => {
      return <li key={index}>{item}</li>;
    }
  );

  var img = data[ind].img;

  return (
    <div>
      <nav className="nav">
        {/* <img
          src={img}
          alt=""
          id="logo-88"
          width="100"
          height="60"
          viewBox="0 0 40 41"
          fill="none"
        /> */}
        <a
          href="/#Internships"
          onclick="history.back();return false;"
          className="arrow"
        >
          <img
            src="https://uploads-ssl.webflow.com/64072c0202cbda2c81c484da/64088dfd55b652dcf8126b5d_doodle2.svg"
            loading="lazy"
            alt=""
            className="doodle-arrowh"
          />
        </a>

        <div className="internnav">
          <ul className="navbar">
            <a
              href="/#Internships"
              onclick="history.back();return false;"
              className="arrow"
            >
              <li>Return To Explore More</li>
            </a>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeAdlWW4Sh5_jb-be7djxOK7yKzzbsEAYwei19w1f9RTFffaQ/viewform"
            className="button internbutton cc-large w-button "
          >
            Register
          </a>
        </div>
      </nav>

      <section className="body">
        <div className="head">
          <h1>{data[ind].title}</h1>
        </div>
        <div className="msg">
          <div className="first">
            <div className="texts">
              <h3 className="topic underline">Outcomes of this Internship </h3>

              <ul className="outcomes desc">{Outcomes_of_this_Internship}</ul>
            </div>

            <img src={img} className="internImg" alt="" />
          </div>

          <div>
            {/* {Basic_System_Requirements.length > 0 && (
              <h3>Basic System Requirements</h3>
            )}

            <ul>{Basic_System_Requirements}</ul> */}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default InternPage;
