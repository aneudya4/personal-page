import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner />
        <AboutMe />
    </Layout>
);

export default IndexPage;
