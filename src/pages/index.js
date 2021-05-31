import * as React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => {
    return (
        <Fade>
            <Layout>
                <SEO title="Home" />
                <Banner />
                <AboutMe />
                <Projects />
                <Contact />
                <Footer />
            </Layout>
        </Fade>
    );
};

export default IndexPage;
