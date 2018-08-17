import React from 'react'
import ReactDOM from 'react-dom'





class Post extends React.Component {
constructor(props){
  super(props);
  this.mathPosts=this.mathPosts.bind(this)
}

mathPosts(){
  console.log("poooo")
  return(
    <div>
      <p>hghg</p>
    </div>
  )
}

componentDidMount() {
console.log("this.props.data")
}

wth(){
  console.log("wth")
}

  render(){
    return (
    <div>
      <button onClick={this.mathPosts}>MathPost</button>
      {this.props.data.map((post, index) => (
        <div key={index}>
        <a href={"/posts/"+post.id} ><h2>{post.title}</h2></a>
        <p>{post.content}</p>
        </div>

      ))}
      {this.mathPosts()}
    </div>

    )
  }
}

export default Post
