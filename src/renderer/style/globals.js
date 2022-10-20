import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
        outline: none;
    }
`;

exports default GlobalStyles;