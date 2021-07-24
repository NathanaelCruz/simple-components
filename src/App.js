import React, { Fragment, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Main from './templates/Main'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <BrowserRouter>
        <Header open={open} setOpen={setOpen}/>
          <Main>
            <Routes/>
          </Main>
          <Footer 
            credits="Codificado por Samara Neves e desafio criado por devchallenges.io"
          />
      </BrowserRouter>
    </Fragment>
  )
}
export default App

