import React from 'react';
import {ButtonToolbar, MenuItem, DropdownButton} from 'react-bootstrap';

function OptionButtons(props) {

  const handleSelect = (evt) => {
    props.gridSize(evt);
  }
  return (
    <div className="center">
      <ButtonToolbar>
        <button className="btn btn-warning" onClick={props.slow}>
          Slow
        </button>
        <button className="btn btn-warning" onClick={props.fast}>
          Fast
        </button>
        <DropdownButton title="Grid Size" id="size-menu" onSelect={handleSelect}>
          <MenuItem eventKey="default">
            <strong>Small &nbsp;</strong>
            (Default)</MenuItem>
          <MenuItem eventKey="Medium">
            <strong>Medium</strong>
          </MenuItem>
          <MenuItem eventKey="Big">
            <strong>Big &nbsp;
            </strong>
            (Afects Performance)</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    </div>

  )
}

export default OptionButtons;