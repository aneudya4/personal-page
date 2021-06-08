import React, { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navigation() {
    return (
        <>
            <nav className="navigation">
                <h1>
                    Aneudy <span>Adames</span>
                </h1>
                <MobileMenu />
                <ul className="navigation__items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Dev Tips</li>
                </ul>
            </nav>
        </>
    );
}
