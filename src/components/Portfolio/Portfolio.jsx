import React from "react";
import styles from "./Portfolio.module.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Portfolio = () => {
  return (
    <section id={styles.works}>
      <h2 className={styles.worksTitle}>My Portfolio</h2>
      <span className={styles.worksDesc}>
        I find satisfaction in meticulously focusing on details, striving for
        perfection in my work. I'm enthusiastic about leveraging my skills and
        expertise to assist businesses in reaching their objectives and
        enhancing their websites.
      </span>
      <div className={styles.worksImgs}>
        <img src={Portfolio1} alt="Portfolio1" className={styles.worksImg} />
        <img src={Portfolio2} alt="Portfolio2" className={styles.worksImg} />
        <img src={Portfolio3} alt="Portfolio3" className={styles.worksImg} />
        <img src={Portfolio4} alt="Portfolio4" className={styles.worksImg} />
        <img src={Portfolio5} alt="Portfolio5" className={styles.worksImg} />
        <img src={Portfolio6} alt="Portfolio6" className={styles.worksImg} />
      </div>
      <button className={styles.worksBtn}> 
        See More
      </button>
    </section>
  );
};

export default Portfolio;
