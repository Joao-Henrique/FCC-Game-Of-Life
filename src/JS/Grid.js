import React from 'react';
import Box from './Box';

function Grid(props) {

  const width = props.cols * 9;
  let rowsArr = [];
  let boxClass = "";
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let boxId = i + "_" + j;
      boxClass = props.gridFull[i][j]
        ? "box on"
        : "box off";
      rowsArr.push(<Box
        boxClass={boxClass}
        key={boxId}
        boxId={boxId}
        row={i}
        col={j}
        selectBox={props.selectBox}/>)
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

export default Grid;