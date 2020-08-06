import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`



html {
    box-sizing: border-box;
    font-size: 62.5%; 
    /* happy REMS 1rem = 10px*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body{
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    padding-left: 150px;

    @media(max-width:1000px){
        padding-left: 0;
        padding-top: 100px;
    }
}
`;

export default GlobalStyle;
