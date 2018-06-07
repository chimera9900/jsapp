import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

export const Header = ()=>(
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Add expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
    <NavLink to='/Help' activeClassName='is-active'>Help</NavLink>
  </header>

)
