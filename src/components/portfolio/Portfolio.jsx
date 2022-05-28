import React from "react";
import "./portfolio.css";
import TarotCards from "../../img/tarot-cards.jpeg";
import Taproom from "../../img/taproom.jpg";
import LocalBusiness from "../../img/local-business.jpg";
import Tamagotchi from "../../img/tamagotchi.jpg";
import Treats from "../../img/treats.jpg";
import Pizza from "../../img/pizza.jpg";

const data = [
    {
        id: 1,
        image: TarotCards,
        title: "Tarot Card Reader",
        github: "https://github.com/cicy886/tarot-card-reader.git",
        demo: "https://cicy886.github.io/tarot-card-reader/#/",
    },
    {
        id: 2,
        image: Taproom,
        title: "Taproom",
        github: "https://github.com/cicy886/tap-room.git",
        demo: "https://cicy886.github.io/tap-room/",
    },
    {
        id: 3,
        image: LocalBusiness,
        title: "Local Business API",
        github: "https://github.com/cicy886/LocalBusinessApi.Solution.git",
    },
    {
        id: 4,
        image: Tamagotchi,
        title: "Tamagotchi (Team Project)",
        github: "https://github.com/cicy886/Team_Week_Tamagotchi.git",
        demo: "https://gabeaya.github.io/Team_Week_Tamagotchi/",
    },
    {
        id: 5,
        image: Treats,
        title: "Pierre's Treats and Flavors Tracker",
        github: "https://github.com/cicy886/PierresTreat.Solution.git",
    },
    {
        id: 6,
        image: Pizza,
        title: "Pizza Parlor",
        github: "https://github.com/cicy886/pizza-parlor.git",
        demo: "https://cicy886.github.io/pizza-parlor/",
    },
];

const Portfolio = ({ demo }) => {
    if (demo != null) {
    }
    return (
        <section id="portfolio">
            <h5>My work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    if (demo != null) {
                      return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img
                                    src={image}
                                    alt={title}
                                    className="img__size"
                                />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                    } else {
                      return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img
                                    src={image}
                                    alt={title}
                                    className="img__size"
                                />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </div>
                        </article>
                    );
                    }
                })}
            </div>
        </section>
    );
};

export default Portfolio;
