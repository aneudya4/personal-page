import * as React from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
    <header>
        <Navigation />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
