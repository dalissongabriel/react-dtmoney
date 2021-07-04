import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -6rem;

    @media (max-width: 720px) {
        overflow: scroll;
        gap: 1rem;
    }

    div {
        background: #FFFFFF;
        color: var(--titulos);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        @media (max-width: 720px) {
            width: 18rem;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1em;
            font-weight: normal;
            font-size: 2rem;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--verde);
            color: #FFFFFF;
        }
    }
`;