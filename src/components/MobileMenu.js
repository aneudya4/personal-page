import React, { useState, useLayoutEffect } from 'react';
import NavItems from './NavItems';
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
                aria-label="hamburger-button"
                className={isActive ? 'open' : null}
                onClick={() => setIsActive(!isActive)}
                id="menu"
            />

            <div className="mobile__nav__overlay">
                <NavItems setIsActive={setIsActive} />
            </div>
        </div>
    );
};

export default MobileMenu;
