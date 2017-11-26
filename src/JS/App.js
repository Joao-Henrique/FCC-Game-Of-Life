import React, {Component} from 'react';
import logo from '../img/logo.svg';
import FooterInstance from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">FCC Game of Life by João Henrique</h1>
        </header>

        <FooterInstance/>
      </div>
    );
  }
}

export default App;
