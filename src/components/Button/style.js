import styled from 'styled-components'
import { buttonSystem } from '../../constants/index'


export const Button = styled.button`
    width: auto;
    font-size: .8rem;
    background-color: ${ props => props.background ? buttonSystem.bakgroundColor[props.background] : buttonSystem.bakgroundColor.default };
    color: ${ props => props.background ? buttonSystem.colorText[props.color] : buttonSystem.colorText.default };
    text-align: center;
    padding: 16px;
    font-weight: bold;
    border-radius: .3rem;
    border: 0;
    cursor: pointer;

    :hover, 
    :active, 
    :focus {
      background-color: ${ props => props.background ? buttonSystem.hover[props.background] : buttonSystem.hover.default };
      transition: 1s;
   }
`