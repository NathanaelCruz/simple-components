import React, { Fragment } from 'react'
import Button from '../../components/Button'
import Title from '../../components/Title'
import TextCode from '../../components/TextCode'

const ButtonComponents = () => {
    return (
        <Fragment>
                <Title text="Buttons"/> 
                <TextCode text="<Button/>"/>
                <Button>Teste</Button>
        </Fragment> 
    )
}

export default ButtonComponents