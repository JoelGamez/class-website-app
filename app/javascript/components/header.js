
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PostContainer from './postContainer'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



class Header extends React.Component {
  render(){
    return (
      <div>
        <Navbar inverse style={{backgroundColor:'#00ffa5',borderColor:'#ffffff'}}>
          <Navbar.Header  pullLeft >
            <Navbar.Brand >
              <a  id='logo' pullLeft >HQ3</a>
            </Navbar.Brand>
            <Navbar.Toggle style={{borderColor:'#ffffff'}} />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav  pullLeft>
              <NavItem eventKey={1} href="#">
                    <NavLink exact activeStyle={{color:"purple"}}to='/'>Home</NavLink>
              </NavItem>
              <NavItem eventKey={2} href="#">
                  <NavLink activeStyle={{color:"purple"}}to='/about'>About</NavLink>
              </NavItem>
              <NavItem eventKey={3} href="#">
                  <NavLink activeStyle={{color:"purple"}}to='/tutorials'>Tutorials</NavLink>
              </NavItem>
              <NavItem eventKey={4} href="#">
                  <NavLink activeStyle={{color:"purple"}}to='/posts'>Posts</NavLink>
              </NavItem>
              <NavItem eventKey={5} >
                  <a href='/admins/sign_in'>signin</a>
              </NavItem>

            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Fun Games
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
