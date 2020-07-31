import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'

export default _ => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={ Todo } />
            <Route path='/todos' exact component={ Todo } />
            <Route path='/about' exact component={ About } />
            <Redirect path='*' to='/' />
        </Switch>
    </BrowserRouter>
)