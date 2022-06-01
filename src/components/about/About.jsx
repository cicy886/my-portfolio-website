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
                        My passion for problem-solving started when I was a
                        child. Every child has their own choice of toys, and I
                        was always into puzzles and Lego games. As an adult, my
                        hobbies have expanded to online strategy games. I have
                        always enjoyed putting pieces together and the sense of
                        achievement after solving a problem. In order to work
                        towards my goal, I studied communication at Portland
                        State University because I want to be a QA in the IT
                        industry at that time, and I believed that studying in
                        communication major would help me sharpen my skills.
                        However, I haven’t yet fulfilled that dream after
                        getting out of school. 
                        <br />
                        <br />
                        During a conversation with my
                        previous classmate, I came across Epicodus, a coding
                        bootcamp located in Portland Oregon. After attending
                        Epicodus, I found coding to be the perfect match for my
                        goal of all time. Now I can build any product I want
                        through coding! At Epicodus I learned coding languages
                        for the frontend like HTML, CSS, javaScript, React,
                        Redux, etc., and for the backend like C#/.Net, SQL,
                        NoSQL, etc. I also learned the workflow of coding in a
                        dev team; I learned how to troubleshoot when problems
                        appear; I learned how to convey my idea clearly by
                        whiteboarding; I learned how to pick up a new skill
                        fast, and I learned how to find the right answer through
                        research. I am determined to work as a developer more
                        than I had ever been after studying at Epicodus. 
                        <br />
                        <br />
                        After
                        finishing the curriculum at Epicodus, I work as a
                        full-stack developer at I-ology. I’ve gained real work
                        experience at I-ology, in the meanwhile I picked up some
                        new skills like Vue and Sass. I also learned to work
                        with Cloud technologies. I am enthusiastically learning new skills every day! Without hesitation, I am looking forward to facing new challenges, learning more new skills, and building strong and lasting work relations along the way.
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
