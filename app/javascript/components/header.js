
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PostContainer from './postContainer'
import {Route, Switch, Link, NavLink} from 'react-router-dom'



class Header extends React.Component {
  render(){
    return (
      <div>
        <NavLink exact activeStyle={{color:"purple"}}to='/'>Home</NavLink>
        <NavLink activeStyle={{color:"purple"}}to='/about'>About</NavLink>
        <NavLink activeStyle={{color:"purple"}}to='/tutorials'>Tutorials</NavLink>
        <NavLink activeStyle={{color:"purple"}}to='/posts'>Posts</NavLink>
        <a href='/admins/sign_in'>signin</a>

      </div>
    )
  }
}

export default Header
