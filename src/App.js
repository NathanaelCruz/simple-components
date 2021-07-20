import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from './components/Header/index'
import Main from './components/Main'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <Main>
          <Routes/>
        </Main>
      </BrowserRouter>
    </Fragment>
  )
}
export default App

