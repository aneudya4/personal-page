import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner__container">
                <div className="banner__left">
                    <div className="banner__info">
                        <span>Hello I'm</span>
                        <h2>
                            Aneudy <span>Adames</span>
                        </h2>
                        <p>Full-Stack Web Developer</p>
                        <p>
                            a web developer based in NYC with a passion for
                            building high-quality, thoughtful, and intuitive web
                            applications.
                        </p>

                        <button className="btn banner__btn">Hire Me</button>
                    </div>
                </div>
                <div className="banner__right">
                    <StaticImage
                        src="../images/office-4.svg"
                        placeholder="tracedSVG"
                        className="banner__img-container"
                        alt="developer"
                    />
                </div>
            </div>
        </section>
    );
}
