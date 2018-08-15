
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
                <a id='logo'>HG3</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  <NavLink exact activeStyle={{color:"#fbe547"}}to='/'>Home</NavLink>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <NavLink activeStyle={{color:"#fbe547"}}to='/about'>About</NavLink>
                </NavItem>
                <NavItem eventKey={3} href="#">
                  <NavLink activeStyle={{color:"#fbe547"}}to='/tutorials'>Tutorials</NavLink>
                </NavItem>
                <NavItem eventKey={4} href="#">
                  <NavLink activeStyle={{color:"#fbe547"}}to='/posts'>Posts</NavLink>
                </NavItem>
                <NavItem eventKey={5} >
                  <a href='/admins/sign_in'>signin</a>
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    <a >Resources</a>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <a >Local Events</a>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}

export default Header
