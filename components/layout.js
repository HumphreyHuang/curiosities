import Head from 'next/head';

import Nav from './nav';
import Footer from './footer';

export default function({ children, title = 'Curiosities 🚀' }) {
    console.log(children);

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
            <Nav />
            <div className="content">{children}</div>
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
                }
                .content {
                    flex: 1 0 auto;
                }
                .footer {
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    );
}
