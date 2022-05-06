import React from 'react'
import '../App.css'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Footer from './footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
