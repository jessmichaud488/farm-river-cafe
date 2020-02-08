import React from 'react'
import './media.css'
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }

    //this.handleSignUpClick = this.handleSignUpClick.bind(this)

  }

  render () {
  return (
    <Router>
    <div>
      <Navbar />
      <Footer />
    </div>
    </Router>
  )
  }
}

export default App
