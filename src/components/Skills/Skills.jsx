import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import BackendDev from "../../assets/database.png";

const Skills = () => {
  return (
    <section id={`skills`}>
      <span className={`skillTitle`}>About Me</span>
      <span className={`skillDesc`}>
        Passionate Entry-Level React Developer with Strong Technical Skills and
        Customer Service Experience
      </span>
      <div className={`skillBars`}>
        <div className={`skillBar`}>
          <img src={UIDesign} alt="UIDesign" className={`skillBarImg`} />
          <div className={`skillBarText`}>
            <h2>UI/UX Design</h2>
            <p>
              My skillset in UI/UX design showcases my ability to create
              aesthetically pleasing and user-friendly interfaces.
            </p>
          </div>
        </div>
        <div className={`skillBar`}>
          <img src={WebDesign} alt="WebDesign" className={`skillBarImg`} />
          <div className={`skillBarText`}>
            <h2>Web Design</h2>
            <p>
              I'm skilled in web development, which means I can build websites
              that work smoothly, look great, and follow the best practices for
              security and performance.
            </p>
          </div>
        </div>
        <div className={`skillBar`}>
          <img
            src={BackendDev}
            alt="BackendDev"
            className={`skillBarImg`}
          />
          <div className={`skillBarText`}>
            <h2>Back-end</h2>
            <p>
              I also excel in backend development, focusing on the
              behind-the-scenes functionality of websites and applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
