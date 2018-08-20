
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
         sciencePosts: [],
         spanishPosts: [],
         results: []
       },
      this.getCertainPosts = this.getCertainPosts.bind(this),
      this.renderMathPost = this.renderMathPost.bind(this),
      this.updateResults = this.updateResults.bind(this)


   }

    componentDidMount() {
      this.getCertainPosts()
      this.getCertainPosts(`mathPosts`,"mathPosts")
      this.getCertainPosts(`sciencePosts`,"sciencePosts")
      this.getCertainPosts(`spanishPosts`,"spanishPosts")

    }
/////////////////////////////////////////////////////////////////////////////////
    getCertainPosts = (x = `posts`, y = "posts") => {
     axios({
       method: 'POST',
       url: '/graphql',
       headers: { 'Content-Type': 'application/json',
                   'X-Requested-With': 'XMLHttpRequest',
                   'X-CSRF-TOKEN':     token},
       data: {
         query: `
           query {
             ${x} {
               title
               content
               id
               is_math
             }
           }
         `
       }
     }).then(response => {


         this.setState({[x]: response.data.data[y]})
     })
     return this.state[y]
     ////////////////////////////////
   }

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////



////////////////////////////////////////////////
   updateResults(topic){
     this.setState({
       results: topic
     })
   }
   //////////////////////////////////////////////
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
          <PostNav style={{width: '50px'}} updateResults={this.updateResults}
                                          resultData={this.state.results}
                                          getCertainPosts={this.getCertainPosts}



                                          />
          <button onClick={this.getMathPost}>wth</button>
          <h1>Postger</h1>
          <br/>
            <Post data={this.state.posts}/>
          <p>--------------------</p>

        </div>

      )
    }
}
