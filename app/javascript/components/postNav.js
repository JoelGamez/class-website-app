
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap/lib'




class PostNav extends React.Component {

  render(){
    const props = this.props
    return (
      <div>
          <Navbar className='postNav' inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <p id='logo'>Posts!</p>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} >
                  <NavLink onClick={ () => props.updateResults(props.getMath()) } activeStyle={{color:"#fbe547"}}to='/posts/math'>MathPosts</NavLink>
                  <button onClick={ () => props.updateResults(props.getMath()) } activeStyle={{color:"#fbe547"}}>MathREnder</button>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          {this.props.resultData.map((post,index)=>(
              <p key={index}>{post.title}</p>

          ))}




      </div>
    )
  }
}

export default PostNav
