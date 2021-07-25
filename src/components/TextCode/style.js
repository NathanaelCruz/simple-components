import styled from 'styled-components'


export const Code = styled.code`
    width: 100%;
    color: ${ props => props.states ? "var(--color-text-states)" : "var(--color-text)" };
    font-family: var(--font-code);
    font-size: 14px;
    line-height: 1.5;
`