import React from 'react';
import logo from '../img/logo.svg';
import FooterInstance from './footer';
import Grid from './Grid';
import ControlButtons from './ControlButtons';
import OptionButtons from './OptionButtons';
import ProjectDescription from './ProjectDescription';

class App extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.cols = 20;
    this.rows = 12;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    }
  }

  /* TURNS A SELECTED CELL ALIVE AVAILABLE TO THE USER */
  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({gridFull: gridCopy})
  }

  /* PLACES LIVE CELLS RANDOMLY IN THE BOARD AVAILABLE TO THE USER */
  seed = () => {
    console.log(this.state.gridFull);
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
      this.setState({gridFull: gridCopy});
    }
  }

  /* RESUMES THE GAME AVAILABLE TO THE USER */
  playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed);
  }

  /* PAUSES THE GAME AVAILABLE TO THE USER */
  pauseButton = () => {
    clearInterval(this.intervalId);
  }

  /* CLEARS THE BOARD AVAILABLE TO THE USER */
  clear = () => {
    let grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));
    this.setState({gridFull: grid, generation: 0});
    this.pauseButton()
  }

  /* ADJUSTS THE SLOW SPEED AVAILABLE TO THE USER */
  slow = () => {
    this.speed = 1000;
    this.playButton();
  }

  /* ADJUSTS THE FAST SPEED AVAILABLE TO THE USER */
  fast = () => {
    this.speed = 100;
    this.playButton();
  }

  /* ADJUSTS THE GRID SIZES AVAILABLE TO THE USER */
  gridSize = (size) => {
    switch (size) {
      case "Big":
        this.cols = 70;
        this.rows = 48;
        break;
      case "Medium":
        this.cols = 40;
        this.rows = 24;
        break;
      default:
        this.cols = 20;
        this.rows = 12;
        break;
    }
    this.clear();
  }

  /* LOOP TO CHECK THE GAME RULLES FOR EACH CELL IN THE BOARD AND AVANCE A GENERATION */
  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) 
          if (g[i - 1][j]) 
            count++;
      if (i > 0 && j > 0) 
          if (g[i - 1][j - 1]) 
            count++;
      if (i > 0 && j < this.cols - 1) 
          if (g[i - 1][j + 1]) 
            count++;
      if (j < this.cols - 1) 
          if (g[i][j + 1]) 
            count++;
      if (j > 0) 
          if (g[i][j - 1]) 
            count++;
      if (i < this.rows - 1) 
          if (g[i + 1][j]) 
            count++;
      if (i < this.rows - 1 && j > 0) 
          if (g[i + 1][j - 1]) 
            count++;
      if (i < this.rows - 1 && this.cols - 1) 
          if (g[i + 1][j + 1]) 
            count++;
      if (g[i][j] && (count < 2 || count > 3)) 
          g2[i][j] = false;
        if (!g[i][j] && count === 3) 
          g2[i][j] = true;
        }
      }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  }

  /* LIFECYCLE METHOD TO DETERMINE WHAT SHOULD HAPPEN WHEN THE APP IS LOADED */
  componentDidMount() {
    this.seed();
    this.playButton();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">FCC Game of Life by João Henrique</h1>
        </header>
        <h1>The Game Of Life</h1>
        <div className="row">
          <div className="col-md-6 projectSection">
            <div className="wraper">
              <ControlButtons
                playButton={this.playButton}
                pauseButton={this.pauseButton}
                clear={this.clear}
                seed={this.seed}/>
              <h2>Generations: {this.state.generation}</h2>
              <Grid
                gridFull={this.state.gridFull}
                rows={this.rows}
                cols={this.cols}
                selectBox={this.selectBox}/>
              <OptionButtons slow={this.slow} fast={this.fast} gridSize={this.gridSize}/>
            </div>
          </div>
          <div className="col-md-6 information">
            <ProjectDescription/>
          </div>
        </div>
        <FooterInstance/>
      </div>
    )
  }
}

/* FUNCTION TO MAKE A COPY OF THE GRID STATE BEFORE THE SETSTATE */
function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default App;