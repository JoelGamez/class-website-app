import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PostContainer from './postContainer'
import About from './about'
import Tutorial from './tutorial'
import Home from './home'
import {Route, Switch} from 'react-router-dom'



class App extends React.Component {
  render(){
    return (
      <div>
        <a>NAVVVVVV</a>
        <Switch>
          < Route exact path="/" component={Home}/>
          < Route exact path="/posts" component={PostContainer}/>
          < Route exact path="/about" component={About}/>
          < Route exact path="/tutorials" component={Tutorial}/>
        </Switch>
      </div>
    )
  }
}

export default App
