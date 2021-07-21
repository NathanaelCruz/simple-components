import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <Wrapper>
          <Main>
            <Routes/>
          </Main>
          <Footer 
            credits="Codificado por Samara Neves e desafio criado por devchallenges.io"
          />
        </Wrapper>
      </BrowserRouter>
    </Fragment>
  )
}
export default App

