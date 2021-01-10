import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    &::-webkit-scrollbar{
        width:.5rem
    }
    &::-webkit-scrollbar-thumb{
        background-color:#696969;
    }
}
body{
    font-family: 'Source Code Pro', monospace;
    width:100%
}
h1,h2{
    font-family: 'Goldman', cursive;
    color:#1E4147;
    padding:2rem;
}
h3{
    padding:1.5rem 0;
    font-size:1.2rem;
    color:#16172E;
}
p{
    font-size:1rem;
    line-height:200%;
    color:#696996;
}
a{
    text-decoration:none;
}
img{
    display:block;
}
`;

export default GlobalStyles;
