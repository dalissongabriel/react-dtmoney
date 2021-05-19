import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --textos: #969CB2;
        --titulos: #363F5F;
        --shape-principal: #969CB2;
        --vermelho: #E52E4D;
        --verde: #33CC95;
        --azul: #5429CC;
        --azul-claro: #6933FF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
        border: none;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;