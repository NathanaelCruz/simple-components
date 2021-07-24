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

export const Heading1 = styled.h1`
    width: 100%;
    color: var(--title);
    font-family: var(--font-primary);
    font-size: 32px;
`
export const SectionWrapper = styled.section `
    display: flex;
    flex-direction: column;
`
export const Code = styled.code`
    color: ${ props => props.color ? "var(--color-text)" : "var(--color-text-states)" }
    font-family: var(--font-code);

`