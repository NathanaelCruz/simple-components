import styled from 'styled-components'

export const Code = styled.code`
    color: ${ props => props.color ? "var(--color-text)" : "var(--color-text-states)" };
    font-family: var(--font-code);
    font-size: 14px;
`