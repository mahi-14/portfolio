import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mahi-14" target="_blank">
        <FaGithub />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank">
        <ImWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
