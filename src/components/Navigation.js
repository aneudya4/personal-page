import React, { useEffect, useState } from 'react';
import NavItems from './NavItems';
import MobileMenu from './MobileMenu';

export default function Navigation() {
    return (
        <>
            <nav className="navigation">
                <h1>
                    <span>{'<'}</span>
                    Aneudy <span>Adames {'/>'}</span>
                </h1>
                <NavItems />
            </nav>
            <MobileMenu />
        </>
    );
}
