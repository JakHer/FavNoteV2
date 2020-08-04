import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');


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
}
`;

export default GlobalStyle;
