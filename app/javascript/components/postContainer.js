
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios';

const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN':     token
      }

const token = document
                      .querySelector('meta[name="csrf-token"]')
                      .getAttribute('content');


export default class PostContainer extends React.Component {
    constructor(props) {
     super(props);
     this.state =  {
         posts: []
       },
      this.getAllPosts = this.getAllPosts.bind(this)
   }
    componentDidMount() {
      this.getAllPosts()
    }
    getAllPosts = () => {
     axios({
       method: 'POST',
       url: '/graphql',
       headers: { 'Content-Type': 'application/json',
                   'X-Requested-With': 'XMLHttpRequest',
                   'X-CSRF-TOKEN':     token},
       data: {
         query: `
           query {
             posts {
               title
               content
               id
             }
           }
         `
       }
     }).then(response => {

       console.log(response.data.data.posts)
         this.setState({posts: response.data.data.posts})
     })
   }
    render () {
      return (
        <div>
          <h1>Postger</h1>
          <br/>
          {this.state.posts.map((post, index) => (
            <div className='post-row' key={index}>
              <Link to={"/posts/"+post.id}>weere</Link>
              <a href={"/posts/"+post.id}><h2>{post.title}</h2></a>
              <p>{post.content}</p>
              <br/>
            </div>
          ))}
        </div>
      )
    }
}
