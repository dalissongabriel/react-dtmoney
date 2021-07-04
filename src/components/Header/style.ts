import styled from 'styled-components';

export const Container = styled.header`
    background: var(--azul);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 1rem 9.2rem;

    button {
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        
        padding: 0 2rem;
        height: 3rem;
        background: var(--azul-claro);
        border-radius: .4rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        @media (max-width: 720px) {
            width: 8rem;
            font-size: 0.75rem;
        }
    }
`;