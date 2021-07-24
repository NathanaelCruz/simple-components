import styled from 'styled-components'

export const Navigation = styled.nav `
    display: block;
    height: 100%;
    width: 100%;
`
export const NavigationList = styled.ul `
    font-family: var(--font-primary);
    color: var(--text);
    font-size: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 32px;
    margin: 32px 0;
    padding: 0 42px;

    @media(min-width: 900px) {
        align-items: flex-start;
        justify-content: flex-start;
        font-size: 1rem;
    }
`
export const NavigationListItem = styled.li `
    width: auto;
    a {
        color: inherit;
        text-decoration: none;
    }
    a:hover,
    a:focus,
    a:active {
        color: var(--dark-blue);
    }
`