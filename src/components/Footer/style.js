import styled from 'styled-components'

export const Footer = styled.footer`
    width: 100%;
    padding: 16px 5px;
    line-height: 1.5;
    
    @media(min-width: 900px) {
        grid-column: 2;
    }
`
export const Address = styled.address`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: var(--font-primary);
    color: #A9A9A9;
`