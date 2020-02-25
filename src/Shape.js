import React from 'react';

const Shape = (props) => {
  var shape = props.shape;
  var selectShape = props.selectShape;
  return(

  <div className= {props.shape} onClick={() => {return selectShape(shape)}}/>
)
};
export default Shape;
