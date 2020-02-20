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
  }
  
  render () {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  )
  }
}

export default App
