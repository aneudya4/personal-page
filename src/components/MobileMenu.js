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
                className={isActive && 'open'}
                onClick={() => setIsActive(!isActive)}
                id="menu"
            />

            <div className="mobile__nav__overlay">
                {/* <h1>
                    Aneudy <span>Adames</span>
                </h1> */}
                <NavItems setIsActive={setIsActive} />
            </div>
        </div>
    );
};

export default MobileMenu;
