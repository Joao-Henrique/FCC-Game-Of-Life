import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';

class ControlButtons extends React.Component {

  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button className="btn btn-success" onClick={this.props.playButton}>
            Play
          </button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-danger" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-success" onClick={this.props.seed}>
            Seed
          </button>
        </ButtonToolbar>
      </div>

    )
  }
}

export default ControlButtons;