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
                        achievement after solving a problem. " In order to work
                        towards my goal of being a developer, I studied
                        communication at Portland State University and then
                        full-stack software development at Epicodus BootCamp.
                        Studying communication sharpened my skills that are
                        relevant to my work as a developer. Good communication
                        is key to good working relationships, productivity,
                        problem-solving, and good work culture. I’ve found
                        coding to be the perfect match for my goal of all time.
                        Now I can build any product I want through coding! I’ve
                        studied coding languages for the frontend like HTML,
                        CSS, Sass, JavaScript, React, Redux, Vue, etc., and for
                        the backend like C#/.Net, SQL, NoSQL, etc. I’m
                        comfortable with the workflow of coding in a dev team,
                        troubleshooting when problems appear, and conveying my
                        ideas clearly. I pick up new skills quickly, and I know
                        how to find the right answer through research. I have
                        real work experience as a Full Stack Developer and have
                        worked with Cloud technologies. I am enthusiastically
                        learning new skills every day! Without hesitation, I am
                        looking forward to facing new challenges, learning more
                        new skills, and building strong and lasting work
                        relations along the way.
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
