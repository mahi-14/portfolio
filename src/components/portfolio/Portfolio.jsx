import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "Audio Player (design and some functionalities) using Html, Css, Javascript.",
    github: "https://github.com/mahi-14/audioPlayer",
    demo: " https://mahi-14.github.io/audioPlayer/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React simple TodoList using React js",
    github: "https://github.com/mahi-14/ReactTodoList",
    demo: " https://mahi-14.github.io/ReactTodoList/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bootstrap website with email js using bootstrap, emailjs",
    github: "https://github.com/mahi-14/bootstrap",
    demo: " https://mahi-14.github.io/bootstrap/",
  },
  {
    id: 4,
    image: IMG4,
    title:
      "E Commerce Art website (Full Stack) using React js, Material UI, Context Api, Firebase",
    github: "https://github.com",
    demo: "https://artcloset-d89aa.web.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "News website using API (fetch news from api)",
    github: "https://github.com/mahi-14/newsapp_api",
    demo: "https://mahi-14.github.io/newsapp_api/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github}>Github</a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
