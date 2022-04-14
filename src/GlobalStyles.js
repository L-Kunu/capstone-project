import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    box-sizing: border-box;
}
 
body {
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    background-color: #feeafe;
}

input, label, button, textarea, {
    font-size: 1rem;
}
`;
