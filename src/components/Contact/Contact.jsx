import React from "react";
import styles from "./Contact.module.css";
import LinkedinIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact = () => {
  return (
    <section id={styles.contactPage}>
      <div className={styles.contact}>
        <h1 className={styles.contactPageTitle}>Contact Me</h1>
        <span className={styles.contactDesc}>
          Please fill out the form below to discuss any work opportunities
        </span>
        <form action="" className={styles.contactForm}>
          <input type="text" className={styles.name} placeholder="Your name" />
          <input
            type="email"
            className={styles.email}
            placeholder="Your email"
          />
          <textarea
            className={styles.msg}
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className={styles.submitBtn}>
            Submit
          </button>
          <div className={styles.links}>
            <img src={LinkedinIcon} className={styles.link} alt="LinkedIn" />
            <img src={TwitterIcon} className={styles.link} alt="Twitter" />
            <img src={YoutubeIcon} className={styles.link} alt="Youtube" />
            <img src={InstagramIcon} className={styles.link} alt="Instagram" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
