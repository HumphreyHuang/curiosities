import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        white: '#FFFFFF',
        background: '#FAFAFA'
    }
};

const GlobalStyle = createGlobalStyle`
    box-sizing: border-box;
    font-style: normal;
    
    body {
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button:focus {
        outline: 0;
    }

    input,
    textarea,
    button,
    select,
    a {
        -webkit-tap-highlight-color: transparent;
    }
`;

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}
