import React, { useRef } from "react";
import "./Contact.css";
import LinkedinIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id={`contact`}>
      <h1 className={`contactPageTitle`}>Contact Me</h1>
      <span className={`contactDesc`}>
        Please fill out the form below to discuss any work opportunities
      </span>
      <form onSubmit={sendEmail} className={`contactForm`} ref={form}>
        <input
          type="text"
          className={`name`}
          placeholder="Your name"
          name="from_name"
        />
        <input
          type="email"
          className={`email`}
          placeholder="Your email"
          name="from_email"
        />
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
