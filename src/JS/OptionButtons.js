import React from 'react';
import {ButtonToolbar, MenuItem, DropdownButton} from 'react-bootstrap';

class OptionButtons extends React.Component {

  handleSelect = (evt) => {
    this
      .props
      .gridSize(evt);
  }
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button className="btn btn-warning" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-warning" onClick={this.props.fast}>
            Fast
          </button>
          <DropdownButton title="Grid Size" id="size-menu" onSelect={this.handleSelect}>
            <MenuItem eventKey="default">
              <strong>Small &nbsp;</strong>
              (Recomended)</MenuItem>
            <MenuItem eventKey="Medium">
              <strong>Medium</strong>
            </MenuItem>
            <MenuItem eventKey="Big">
              <strong>Big &nbsp;
              </strong>
              (Afects System Performance)</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>

    )
  }
}

export default OptionButtons;