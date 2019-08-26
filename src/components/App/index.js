import React, { Component } from 'react';
import Navigation from '../Navigation';
import Home from '../Home';
import About from '../About';
import Blog from '../Blog';
import Features from '../Features';
import Pricing from '../Pricing';
import Testimonial from '../Testimonial';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
        <About />
        <Features />
        <Testimonial />
        <Pricing />
        <Blog />
      </>
    );
  }
}

export default App;
