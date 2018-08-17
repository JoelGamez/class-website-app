
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PostContainer from './postContainer'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap/lib'




class Header extends React.Component {
  render(){
    return (
      <div>
          <Navbar className='pageNav' inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <p id='logo'>HG3</p>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} >
                  <NavLink exact activeStyle={{color:"#fbe547"}}to='/'>Home</NavLink>
                </NavItem>
                <NavItem eventKey={2} >
                  <NavLink activeStyle={{color:"#fbe547"}}to='/about'>About</NavLink>
                </NavItem>
                <NavItem eventKey={3} >
                  <NavLink activeStyle={{color:"#fbe547"}}to='/tutorials'>Tutorials</NavLink>
                </NavItem>
                <NavItem eventKey={4} >
                  <NavLink activeStyle={{color:"#fbe547"}}to='/posts'>Posts</NavLink>
                </NavItem>
                <NavItem eventKey={5} href={'/admins/sign_in'}>
                  SignIn
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Resources
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Local Events
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

export default Header
