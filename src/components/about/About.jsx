import React from "react";
import "./about.css";
import ME from "../../img/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Coding</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>
          </div>

          <p>
            My passion for problem-solving started in childhood. While other
            kids reached for action figures or dolls, I gravitated toward
            puzzles and Lego sets—anything that challenged me to figure out how
            things worked and fit together. As I got older, that curiosity
            evolved into a love for strategy games and systems thinking. I’ve
            always enjoyed digging into complex problems and the sense of
            accomplishment that comes with finding the right solution.
            <br />
            <br />
            During a conversation with my previous classmate, I came across
            Epicodus, a coding bootcamp located in Portland Oregon. After
            attending Epicodus, I found coding to be the perfect match for my
            goal of all time. Now I can build any product I want through coding!
            At Epicodus I learned coding languages for the frontend like HTML,
            CSS, javaScript, React, Redux, etc., and for the backend like
            C#/.Net, SQL, NoSQL, etc. I also learned the workflow of coding in a
            dev team; I learned how to troubleshoot when problems appear; I
            learned how to convey my idea clearly by whiteboarding; I learned
            how to pick up a new skill fast, and I learned how to find the right
            answer through research. I am determined to work as a developer more
            than I had ever been after studying at Epicodus.
            <br />
            <br />
            After graduating from Epicodus, I joined I-ology as a full-stack
            developer, where I worked on real-world projects and picked up new
            tools like Vue and Sass. I also began exploring cloud platforms and
            refining my approach to testing and quality assurance. That
            experience, along with my later work at EyeCue Lab and Powur,
            solidified my shift into QA. I gained hands-on experience with tools
            like Postman, TestRail, and Cypress, and became deeply engaged in
            the testing lifecycle—from writing test cases and executing
            regression tests, to collaborating with engineers to resolve bugs.
            <br />
            <br />
            Today, I’m excited to continue growing in the QA field. I bring a
            developer’s perspective to testing, a passion for quality, and a
            deep curiosity for how things work. I thrive on challenges, love
            learning new technologies, and am driven by the opportunity to
            ensure products are not only functional—but exceptional.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
