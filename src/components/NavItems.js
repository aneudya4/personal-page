import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const NavItems = ({ setIsActive }) => {
    const navSections = ['Home', 'about', 'projects', 'contact'];

    const handleOnClick = () => {
        if (setIsActive) {
            setIsActive(false);
        }

        return;
    };

    return (
        <ul className="navigation__items">
            {navSections.map(section => {
                return (
                    <li key={section}>
                        <Link
                            activeClass="active"
                            onClick={handleOnClick}
                            to={section}
                            spy={true}
                            smooth={true}
                            duration={300}
                            offset={-45}
                        >
                            {section}
                        </Link>
                    </li>
                );
            })}
            {/* <li>
                <a
                    aria-label="Github"
                    title="Github"
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/aneudya4"
                >
                    Dev Tips
                </a>
            </li> */}
        </ul>
    );
};

export default NavItems;
