import React from 'react';

const ProjectsItem = () => {
    return (
        <div className="projects__item ">
            <div className="projects__img">
                <img
                    alt="project-img"
                    src="https://ik.imagekit.io/aneudyimages/binge-hp_xm0yUUHiq.webp"
                />
            </div>

            <div className="projects__info">
                <h3>Binged</h3>

                <p>
                    One app. Easy to use. Unlimited possibilities. My goal is
                    simple: BINGE combines the functions of a entertainment
                    encyclopedia in combination with a todo list. BINGE allows
                    the user to register, search and add or remove movies from
                    the watchlist.
                </p>

                <div className="projects__stack">
                    <ul>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="projects__links">
                    <a href="#" className="btn">
                        Live Demo
                    </a>
                    <a href="#" className="btn">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsItem;
