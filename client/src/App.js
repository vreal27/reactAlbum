import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Albums from "./Albums"
import Album from "./Album"
import Picture from "./Picture"

class App extends Component {

  


  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Albums}/>
          <Route path="/Album/:id" component={Album}/>
          <Route path="/Picture/:id" component={Picture}/>
        </div>
      </Router>
    )
  }
}

export default App
