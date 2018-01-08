import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';

function ControlButtons(props) {

  return (
    <div className="center">
      <ButtonToolbar>
        <button className="btn btn-success" onClick={props.playButton}>
          Play
        </button>
        <button className="btn btn-default" onClick={props.pauseButton}>
          Pause
        </button>
        <button className="btn btn-danger" onClick={props.clear}>
          Clear
        </button>
        <button className="btn btn-success" onClick={props.seed}>
          Seed
        </button>
      </ButtonToolbar>
    </div>
  )
}

export default ControlButtons;