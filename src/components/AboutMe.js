import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutMe() {
    return (
        <section className="about">
            <div className="about__container">
                <StaticImage
                    src="../images/about-me.svg"
                    alt="developer"
                    placeholder="tracedSVG"
                    layout="constrained"
                    className="about__img"
                />

                <div className="about__info">
                    <h2 className="">About Me</h2>
                    <p>
                        Hello! I'm Aneudy Adames, a front-end
                        developer/marketing cloud developer with the Ksquare
                        Group. I work with <span>HTML</span>, <span>CSS</span>,
                        and <span>JavaScript</span>. I also have experience with
                        <span> ReactJS</span>, <span>NodeJS</span>,
                        <span> ExpressJS</span>, and <span>PostgreSQL</span>. I
                        have a strong background in customer service which gives
                        me an understanding of customer’s needs,
                        problem-solving, attention to detail, and communication.
                        I am a massive fan of the <span>MERN</span> and
                        <span>PERN</span> stacks and right now I’m enjoying
                        integrating those technologies with as many things as
                        possible, as you will see in my project section.
                    </p>
                    <p>
                        I have always been intrigued by the world of computers
                        and how they work. If you are looking to hire a new
                        <span> developer</span> to build new projects like web
                        apps or static pages please contact me. I’m thrilled to
                        <span> collaborate</span> with other developers.
                    </p>
                </div>
            </div>
        </section>
    );
}
