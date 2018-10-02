
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
          <nav id="siteNav" >
            <div className="nav-wrapper">
              <div className="nav-content">
                <ul className="tabs tabs-transparent">
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts()) } >All Posts!</button></li>
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts(`mathPosts`,"mathPosts")) } >Math Posts</button></li>
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts(`sciencePosts`,"sciencePosts")) } >Science Posts!</button></li>
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts(`spanishPosts`,"spanishPosts")) } >Spanish Posts!</button></li>
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts(`hwPosts`,"hwPosts")) } >HW Posts!</button></li>
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts(`eventPosts`,"eventPosts")) } >Events Posts!</button></li>
                  <li><button className="postNavButton btn-small" onClick={ () => props.updateResults(props.getCertainPosts(`classProjectPosts`,"classProjectPosts")) } >Class Projects Posts!</button></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="PostContainer">
            <table className="highlight responsive-table">
              <thead >
                <tr>
                  <th className="resultHeader" scope="col">Header</th>
                  <th className="resultHeader" scope="col">Content</th>
                  <th className="resultHeader" scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {this.props.resultData.map((post,index)=>(
                <tr key={index}>

                  <td ><a className="postResults" href={"/posts/"+post.id}>{post.title}</a></td>
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
