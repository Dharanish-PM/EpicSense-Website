import React, { useState } from "react";
import "./about.css";
import img from "../images/log.png";
const About = () => {
  const [trunc, settrunc] = useState(true);
  function myFunction() {
    settrunc(!trunc);
  }

  return (
    <section id="About" className="section background-light wf-section">
      <div className="container">
        <div className="reasons">
          <div className="es ">
            <img src={img} alt="" className="epicsense" />
            <p className="para fontchange">
              &emsp; &emsp; &emsp; &ensp; picsense Technologies is a leading
              provider of technical training internships designed to equip
              aspiring engineers, developers, and technologists with the skills
              and experience they need to excel in their chosen fields. Our
              mission is to bridge the skills gap between education and
              employment, helping students to gain practical experience and
              build their professional networks in the tech industry.
              <p></p>
              <p>
                &emsp; &emsp; &emsp; &ensp; Our training programs are designed
                to provide hands-on experience in cutting-edge technologies such
                as artificial intelligence, machine learning, cloud computing,
                and cybersecurity. We offer a variety of training programs
                tailored to the specific needs and interests of our students,
                including:
              </p>
              <ul>
                <li>Software development internships</li>
                <li>Data science internships</li>
                <li>Cybersecurity internships</li>
              </ul>
              <span className={trunc == false ? "read-more-text" : "read-less"}>
                ............
              </span>
              <p className={trunc == true ? "read-more-text " : "read-less"}>
                <p>
                  &emsp; &emsp; &emsp; &ensp;Our programs are open to students
                  from diverse academic backgrounds, from undergraduate to
                  postgraduate, and we welcome applications from all over the
                  world. Our experienced instructors and mentors are experts in
                  their fields, with many years of experience working in the
                  tech industry.
                </p>
                <p>
                  &emsp; &emsp; &emsp; &ensp;Our training programs are delivered
                  through a combination of online learning and in-person
                  mentoring, with a focus on project-based learning and
                  practical application of skills. We work closely with our
                  partner companies to ensure that our interns gain real-world
                  experience working on challenging projects and collaborating
                  with experienced professionals.
                </p>
                <p>
                  &emsp; &emsp; &emsp; &ensp;Our success stories speak for
                  themselves. Many of our graduates have gone on to secure
                  high-paying jobs in top tech companies around the world, and
                  we take pride in their achievements. Our commitment to
                  excellence and our focus on practical, hands-on learning make
                  us a leading choice for aspiring technologists who want to
                  build successful careers in the tech industry.
                </p>
                <p>
                  &emsp; &emsp; &emsp; &ensp;At Epicsense Technologies, we
                  believe that everyone deserves the opportunity to pursue their
                  dreams and build successful careers in technology. We are
                  dedicated to providing the best possible training and support
                  to our interns, helping them to achieve their goals and reach
                  their full potential.
                </p>
              </p>
            </p>
            <div onClick={myFunction} className="button w-button">
              {trunc === true ? "Read More" : "Read Less"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
