
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
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem eventKey={2} >
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem eventKey={3} >
                  Tutorials
                </NavItem>
                <NavItem eventKey={4} >
                  <Link to="/posts">Posts</Link>
                </NavItem>
                <NavItem eventKey={5} href={'/admins/sign_in'}>
                  SignIn
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} to="/posts">
                    Resources
                </NavItem>
                <NavItem eventKey={2} href="/#posts">
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
