import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: 720px) {
        max-width: 1120px;
        width: 100%;
        overflow: scroll;
    }
   
    table {
        width: 100%;
        margin-top: 4rem;
        border-spacing: 0 0.5rem;

        th {
            text-align: left;
            font-size: 1rem;
            color: var(--textos);
            font-weight: 400;
            padding: 1.25rem 2rem;
            background: var(--background);
            line-height: 1.5rem;

        }

        tr { 
            border-radius: 0.25rem;
            border: none;
        }

        td {
            background: #FFFFFF;
            padding: 1.25rem 2rem;
            color: var(--textos);

            &:first-child {
                color: var(--titulos);
            }

            &.deposit {
                color: var(--verde);
            }

            &.withdraw {
                color: var(--vermelho);
            }
        }
    }
`;