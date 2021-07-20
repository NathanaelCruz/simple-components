import styled from 'styled-components'

export const Navigation = styled.nav `
    display: block;
    height: 100%;
    width: 100%;
`
export const NavigationList = styled.ul `
    font-family: var(--font-primary);
    color: var(--text);
    font-size: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 32px;
    margin: 32px 0;
    padding: 0 42px;

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