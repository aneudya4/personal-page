import React, { useState, useLayoutEffect } from 'react';
import Fade from 'react-reveal/Fade';

const MobileMenu = () => {
    const [isActive, setIsActive] = useState(false);
    useLayoutEffect(() => {
        if (isActive) {
            document.querySelector('body').style.overflow = ' hidden';
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }
    });

    return (
        <div className="mobile__nav">
            <button
                className={isActive && 'open'}
                onClick={() => setIsActive(!isActive)}
                id="menu"
            />

            <div className="overlay">
                <ul className="overlay__navigation__items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Dev Tips</li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
