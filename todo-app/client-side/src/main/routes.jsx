import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import history from './history';
import Todo from '../todo/todo'
import About from '../about/about'
import App from './App'

export default _ => (
    <Router history={ history }>
        <Route path='/' component={ App }>
            <Route path='todos' component={ Todo } />
            <Route path='about' component={ About } />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
)