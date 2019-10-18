import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../lib/components/layout';

class Curiosity extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/repos/zeit/next.js');

        return { res };
    }

    render() {
        return <Layout>Curiosity</Layout>;
    }
}

export default Curiosity;
