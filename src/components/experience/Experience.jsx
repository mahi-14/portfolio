import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Learned</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Learned</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Learned</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Learned</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Learned</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">Learned</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>Express js</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Worked on</small>
              </div>
            </article>
            <article className="experience">
              <BsPatchCheckFill className="eperience__details-icon" />
              <div>
                <h4>Hbs</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
