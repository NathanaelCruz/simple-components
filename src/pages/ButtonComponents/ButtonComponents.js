import React, { Fragment } from 'react'
import Button from '../../components/Button'
import Title from '../../components/Title'
import TextCode from '../../components/TextCode'
import Section from '../../components/Section'
import Wrapper from '../../components/Wrapper'

const ButtonComponents = () => {
    return (
        <Fragment>
            <Title text="Buttons"/> 
            <Wrapper>
            <Section>
                <TextCode text=
                    '<Button background="default" color="default">Default</Button>'
                />
                <Button background="default" color="default">Default</Button>
            </Section>
            <Section>
                <TextCode text='
                    <Button background="primary" color="primary">Primary</Button>' 
                />
                <Button background="primary" color="primary">Primary</Button>
            </Section>
            <Section>
                <TextCode text=
                    '<Button background="secondary" color="secondary">Secondary</Button>'
                />
                <Button background="secondary" color="secondary">Secondary</Button>
            </Section>
            <Section>
                <TextCode text='
                    <Button background="danger" color="danger">Danger</Button>'
                />
                <Button background="danger" color="danger">Danger</Button>
            </Section>
            </Wrapper> 
        </Fragment> 
    )
}

export default ButtonComponents