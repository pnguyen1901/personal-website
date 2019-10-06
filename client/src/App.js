import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Ads from './components/Ads';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faCloudDownloadAlt, faMugHot, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 
library.add(fab, faPaperPlane, faCloudDownloadAlt, faMugHot, faLinkedinIn, faGithub, faLinkedin, faHeart, faReact)

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Ads/>
        <Footer/>
      </div>
    )
  }
}

export default App;
