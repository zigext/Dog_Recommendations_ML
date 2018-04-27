import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomePage from './components/HomePage'
import QuizPage from './containers/QuizPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="app">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/quiz" component={QuizPage} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
