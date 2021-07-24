import styled from 'styled-components'

export const Main = styled.main `
    width: auto;
    background-color: var(--white);
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 16px;

    @media(min-width: 900px) {
        grid-column: 2;
        padding: 24px;
    }
`

