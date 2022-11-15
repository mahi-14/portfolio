import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
//import pdf1 from "../../assets/adobe.pdf";

// USING SWIPER JS FOR SLIDER

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Adobe UX foundation learning journey",
    review: "Online Courses",
  },
  {
    avatar: AVTR2,
    name: "Javascript essentials (JSE)",
    review: "Online Courses",
  },
  {
    avatar: AVTR3,
    name: "Cyber Security Awareness",
    review: "Online Courses",
  },
  {
    avatar: AVTR4,
    name: "Kaya disaster management",
    review: "Online Courses",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What I have done</h5>
      <h2>Certifications</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
