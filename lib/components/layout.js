import Head from 'next/head';
import styled from 'styled-components';

import NavBar from './nav/nav-bar';
import Links from './nav/links';
import Footer from './footer';

export default function({ children, title = 'Curiosities 🚀' }) {
    const Main = styled.div`
        font: 13px menlo;
        color: #58595b;
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        width: 100%;
    `;

    const View = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 auto;
        width: 100%;
        background: ${({ theme }) => theme.colors.background};
    `;

    const Content = styled.div`
        padding-top: 77px;
    `;

    return (
        <Main>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <View>
                <NavBar links={Links} />
                <Content>{children}</Content>
            </View>
            <Footer />
        </Main>
    );
}
