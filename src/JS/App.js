import React from 'react';
import logo from '../img/logo.svg';
import FooterInstance from './footer';

class Box extends React.Component {
  selectBox = () => {
    this
      .props
      .selectBox(this.props.row, this.props.col)
  }
  render() {
    return (<div
      className={this.props.boxClass}
      id={this.props.id}
      onClick={this.selectBox}/>);
  }
}

class Grid extends React.Component {
  render() {
    const width = this.props.cols * 9;
    var rowsArr = [];
    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;

        boxClass = this.props.gridFull
          ? "box on"
          : "box off";
        console.log(this.props.cols);
        rowsArr.push(<Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={this.props.selectBox}/>)
      }
    }
    return (
      <div className="grid" style={{
        width: width
      }}>
        {rowsArr}
      </div>
    );
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
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
          <Grid
            gridFull={this.rows}
            rows={this.rows}
            cols={this.cols}
            selectBox={this.selectBox}/>
          <h2>Generations: {this.state.generation}</h2>
        </div>

        {/* FOOTER COMPONENT */}
        <FooterInstance/>
      </div>
    )
  }
}

export default App;