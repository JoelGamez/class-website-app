
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap/lib'




class PostNav extends React.Component {

 navigateTo(){


 }






 getContentpreview(x){

  return x.substring(0,40) + "..."
 }



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
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts()) } >All Posts!</button>
                </NavItem>
                <NavItem eventKey={2} >
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts(`mathPosts`,"mathPosts")) } >Math Posts</button>
                </NavItem>
                <NavItem eventKey={3} >
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts(`sciencePosts`,"sciencePosts")) } >Science Posts!</button>

                </NavItem>
                <NavItem eventKey={4} >
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts(`spanishPosts`,"spanishPosts")) } >Spanish Posts!</button>

                </NavItem>
                <NavItem eventKey={5} >
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts(`hwPosts`,"hwPosts")) } >HW Posts!</button>

                </NavItem>
                <NavItem eventKey={6} >
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts(`eventPosts`,"eventPosts")) } >Events Posts!</button>

                </NavItem>
                <NavItem eventKey={7} >
                  <button className="postNavButton" onClick={ () => props.updateResults(props.getCertainPosts(`classProjectPosts`,"classProjectPosts")) } >Class Projects Posts!</button>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>

                  <th className="resultHeader" scope="col">Header</th>
                  <th className="resultHeader" scope="col">Content</th>
                  <th className="resultHeader" scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {this.props.resultData.map((post,index)=>(
                <tr key={index}>

                  <td className="resultHeader"><a href={"/posts/"+post.id}><h2>{post.title}</h2></a></td>
                  <td>{this.getContentpreview(post.content)}</td>
                  <td>{post.date}</td>
                </tr>
                ))}

              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

export default PostNav
