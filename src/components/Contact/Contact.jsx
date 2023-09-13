import React from "react";
import "./Contact.css";
import LinkedinIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section id={`contact`}>
      <h1 className={`contactPageTitle`}>Contact Me</h1>
      <span className={`contactDesc`}>
        Please fill out the form below to discuss any work opportunities
      </span>
      <form action="" className={`contactForm`}>
        <input type="text" className={`name`} placeholder="Your name" />
        <input type="email" className={`email`} placeholder="Your email" />
        <textarea
          className={`msg`}
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className={`submitBtn`}>
          Submit
        </button>
        <div className={`links`}>
          <img src={LinkedinIcon} className={`link`} alt="LinkedIn" />
          <img src={TwitterIcon} className={`link`} alt="Twitter" />
          <img src={YoutubeIcon} className={`link`} alt="Youtube" />
          <img src={InstagramIcon} className={`link`} alt="Instagram" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
