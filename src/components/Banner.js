import React from 'react';
import svgImg from '../images/coding.svg';
export default function Banner() {
    return (
        <section className="banner">
            <div className="banner__left">
                <div className="banner__info">
                    <span>Hello I'm</span>
                    <h2>Aneudy Adames</h2>
                    <p>
                        a web developer based in NYC with a passion for building
                        high-quality, thoughtful, and intuitive web
                        applications.
                    </p>

                    <button className="btn banner__btn">Hire Me</button>
                </div>
            </div>
            <div className="banner__right">
                <div className="banner__img-container">
                    <img src={svgImg} />
                </div>
            </div>
        </section>
    );
}
