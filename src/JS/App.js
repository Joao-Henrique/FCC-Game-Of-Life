import React, {Component} from 'react';
import logo from '../img/logo.svg';
import FooterInstance from './footer';

class Grid extends React.Component {
  render() {
    return (
      <div>
        Grid
      </div>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      generator: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">FCC Game of Life by João Henrique</h1>
        </header>

        <div>
          <h1>The Game Of Life</h1>
          <Grid/>
          <h2>Generations: {this.state.generation}</h2>
        </div>

        {/* FOOTER COMPONENT */}
        <FooterInstance/>
      </div>
    )
  }
}

export default App;