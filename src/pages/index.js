import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
    </Layout>
);

export default IndexPage;
