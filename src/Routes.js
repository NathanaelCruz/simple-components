import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import ButtonComponents from './pages/ButtonComponents/ButtonComponents'
import InputComponents from './pages/InputComponents/InputComponents'
import Home from './pages/Home/Home'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/buttons" component={ButtonComponents}/>
            <Route path="/inputs" component={InputComponents}/>
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes