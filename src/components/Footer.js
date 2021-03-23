import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <h2>
                Aneudy <span>Adames</span>
            </h2>
            <div className="footer__links">
                <a>L</a>
                <a>T</a>
                <a>G</a>
            </div>
            <h3>a4aneudy@gmail.com</h3>

            <nav className="footer__nav">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Dev Tips</li>
                </ul>
            </nav>
        </footer>
    );
}
