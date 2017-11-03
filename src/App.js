import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Logo extends Component {
  render() {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Logo />
        <h1 className="App-title">Welcome to React</h1>
      </header>  
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div id="App-content">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h1>Developed by iam1at</h1>
      </footer> 
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
