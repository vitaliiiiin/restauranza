import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle(
    () => css`
        body {
            background-color: #FAF0E6;
        }

        h5 {
            color: #666363;
        }
    `
)

export default GlobalStyle;