import React, { Component } from 'react';
import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import { CTA, Brand, Navbar } from './components';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    )
  }
}

export default App;