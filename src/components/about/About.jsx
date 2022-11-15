import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>BE CSE (5th Sem)</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Skills</h5>
              <small>Web development</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Worked on</small>
            </article>
          </div>

          <p>
            I have done my schooling from Kendriya Vidyalaya Jutogh Cantt Shimla
            and currently persuing with bachelor of Computer Science Engineering
            from Chitkara University. I am in 5th Semester. I am very
            hardworking and dedicated person. I give my 100% to every work which
            I get no mattter what type of work it is.
          </p>

          <a href="#contact" className="btn  btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
