import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="footer">
            <h2>
                Aneudy <span>Adames</span>
            </h2>
            <div className="footer__links">
                <a
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    rel="noopener"
                    target="_blank"
                    href="https://www.linkedin.com/in/aneudy-adames-600441158/"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    aria-label="Twitter"
                    title="Twitter"
                    rel="noopener"
                    target="_blank"
                    href="https://twitter.com/AneudyA4"
                >
                    <AiOutlineTwitter />
                </a>
                <a
                    aria-label="Github"
                    title="Github"
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/aneudya4"
                >
                    <AiFillGithub />
                </a>
            </div>
            <h3>a4aneudy@gmail.com</h3>
        </footer>
    );
}
