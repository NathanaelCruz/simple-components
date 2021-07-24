import styled from 'styled-components'

export const Header = styled.header `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--background-gray);
    height: 100%;
    width: 100%;
    transform:  ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 16px;
    padding: 32px 0;

    @media only screen and (min-width: 900px) {
        max-width: 300px;
        transform: translateX(0);
        grid-column: 1;
    }
`
export const ButtonHamburguer = styled.button`
    width: 50px;
    height: 50px;
    display: block;
    background-color: var(--white);
    margin: 10px;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    border: 0;
    cursor: pointer;
    z-index: 1;

    :hover,
    :active, 
    :focus {
        background-color: var(--background-gray);
    }

    @media(min-width: 900px) {
        display: none;
    }
` 