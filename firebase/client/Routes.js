
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/Home'

class Routes extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Homepage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes