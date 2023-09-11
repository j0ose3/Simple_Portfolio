import React from "react";
import styles from "./Intro.module.css";
import bg from "../../assets/image.png";
import btnImg from '../../assets/hireme.png'
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id={styles.intro}>
      <div className={styles.introContent}>
        <span className={styles.hello}>Hello, </span>
        <span className={styles.introText}>
          I'm <span className={styles.introName}>Jose</span> <br /> A Web
          Developer
          <p className={styles.introPara}>
            I'm learning how to create user interfaces <br /> and web applications with
            React.
          </p>
          <Link>
            <button className={styles.btn}> <img src={btnImg} alt="Hire Me" className={styles.btnImg} /> Hire Me</button>
          </Link>
        </span>
      </div>
      <img src={bg} alt="Profile" className={styles.bg} />
    </section>
  );
};

export default Intro;
