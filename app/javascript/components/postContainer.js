
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios';
import Post from './post'
import PostNav from './postNav'

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
         posts: [],
         mathPosts: [],
         results: []
       },
      this.getAllPosts = this.getAllPosts.bind(this),
      this.getMathPost = this.getMathPost.bind(this),
      this.renderMathPost = this.renderMathPost.bind(this),
      this.updateResults = this.updateResults.bind(this)


   }


    componentDidMount() {
      this.getAllPosts()
      this.getMathPost()

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
               is_math
             }
           }
         `
       }
     }).then(response => {


         this.setState({posts: response.data.data.posts})
     })
     ////////////////////////////////



   }


   updateResults(topic){
     this.setState({
    results: topic
  })




   }


   getMathPost(){

       axios({
         method: 'POST',
         url: '/graphql',
         headers: { 'Content-Type': 'application/json',
                     'X-Requested-With': 'XMLHttpRequest',
                     'X-CSRF-TOKEN':     token},
         data: {
           query: `
             query {
               mathPosts {
                 title
                 content
                 id
                 is_math
               }
             }
           `
         }
       }).then(response => {


           this.setState({mathPosts: response.data.data.mathPosts})
       })
     }





   renderMathPost(){

     return(
     this.state.mathPosts.map((post,index)=>(
       <div key={index}>
         <p>{post.title}</p>
       </div>

     ))
   )
   }



    render () {
      return (
        <div>
          <PostNav style={{width: '50px'}} updateResults={this.updateResults} getMath={this.getMathPost} resultData={this.state.results}/>
          <button onClick={this.getMathPost}>wth</button>
          <h1>Postger</h1>
          <br/>
            <Post data={this.state.posts}/>
          <p>--------------------</p>

        </div>

      )
    }
}
