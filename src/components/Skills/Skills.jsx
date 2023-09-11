import React from "react";
import styles from "./Skills.module.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id={styles.Skills}>
      <span className={styles.skillTitle}>About Me</span>
      <span className={styles.skillDesc}>
        Passionate Entry-Level React Developer with Strong Technical Skills and
        Customer Service Experience
      </span>
      <div className={styles.skillBars}>
        <div className={styles.skillBar}>
          <img src={UIDesign} alt="UIDesign" className={styles.skillBarImg} />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Demo text</p>
          </div>
        </div>
        <div className={styles.skillBar}>
          <img src={WebDesign} alt="WebDesign" className={styles.skillBarImg} />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Demo Text</p>
          </div>
        </div>
        <div className={styles.skillBar}>
          <img src={AppDesign} alt="AppDesign" className={styles.skillBarImg} />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Demo text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
