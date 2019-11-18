import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../lib/components/layout';
import Photo from '../lib/components/photo/photo';

class Curiosity extends Component {
    render() {
        const url = '/static/images/wip.png';
        return (
            <Layout>
                Curiosity - WIP
                <Photo url={url} />
            </Layout>
        );
    }
}

export default Curiosity;
