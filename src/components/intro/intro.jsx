import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id={`intro`}>
      <div className={`introContent`}>
        <span className={`hello`}>Hello, </span>
        <span className={`introText`}>
          I'm <span className={`introName`}>Jose</span> <br /> A Web Developer
          <p className={`introPara`}>
            I'm learning how to create user interfaces <br /> and web
            applications with React.
          </p>
          <Link>
            <button className={`btn`}>
              <img src={btnImg} alt="Hire Me" className={`btnImg`} /> Hire Me
            </button>
          </Link>
        </span>
      </div>
      <img src={bg} alt="Profile" className={`bg`} />
    </section>
  );
};

export default Intro;
