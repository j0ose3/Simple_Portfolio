import React from "react";
import styles from "./Skills.module.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import BackendDev from "../../assets/database.png";

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
          <div className={styles.skillBarText}>
            <h2>UI/UX Design</h2>
            <p>This is a Demo text, you can write your own content here</p>
          </div>
        </div>
        <div className={styles.skillBar}>
          <img src={WebDesign} alt="WebDesign" className={styles.skillBarImg} />
          <div className={styles.skillBarText}>
            <h2>Web Design</h2>
            <p>This is a Demo text, you can write your own content here</p>
          </div>
        </div>
        <div className={styles.skillBar}>
          <img src={BackendDev} alt="BackendDev" className={styles.skillBarImg} />
          <div className={styles.skillBarText}>
            <h2>Back-end</h2>
            <p>This is a Demo text, you can write your own content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
