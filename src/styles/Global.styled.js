import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-background: #fafafa;
        --color-black: #161616;

        --color-grey-light: #c4c4c4;
        --color-grey-medium: #868686;
        --color-grey-dark: #5d5d5d;
        --color-grey-darker: #313131;
    }

    html, body {
        height: 100%;
        box-sizing: border-box;
        background-color: var(--color-background);
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--color-grey-darker);
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
        color: var(--color-grey-darker);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
    }
`;
