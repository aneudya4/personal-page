import React from 'react';
import ProjectsItem from './ProjectItem';
import Fade from 'react-reveal/Fade';

export default function Projects() {
    return (
        <section className="projects">
            <h2>
                {'<'}
                <span>Latest</span> Projects {'/>'}
            </h2>
            <div className="projects__container">
                {[1, 2, 3].map((p, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Fade
                                key={index}
                                className={index}
                                left
                                duration={1000}
                            >
                                <ProjectsItem />
                            </Fade>
                        );
                    } else {
                        return (
                            <Fade
                                key={index}
                                className={index}
                                right
                                duration={1000}
                            >
                                <ProjectsItem />
                            </Fade>
                        );
                    }
                })}
            </div>
        </section>
    );
}
