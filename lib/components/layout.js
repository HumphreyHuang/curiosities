import Head from 'next/head';

import NavBar from './nav/nav-bar';
import Links from './nav/links';
import Footer from './footer';

export default function({ children, title = 'Curiosities 🚀' }) {
    return (
        <div className="main">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="content">
                <NavBar links={Links} />
                <div>{children}</div>
            </div>
            <Footer className="footer" />

            <style jsx global>{`
                .main {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    background: #fff;
                    font: 13px menlo;
                    font-style: normal;
                    color: #58595b;
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    align-items: center;
                    width: 100%;
                }
                .content {
                    width: 1024px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex: 1 0 auto;
                }
                .footer {
                    flex-shrink: 0;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
}
