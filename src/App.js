import React, {Component} from 'react';
import Shape from './Shape'

class Selector extends Component{
  constructor(){
    super();
    this.state = {
      SelectedShape: "square",
    }
  }
  selectShape = (shapeName) => {
    this.setState({
      SelectedShape: shapeName
    })
  }
  render(){
    return(
      <div className="container">
      <div className="navbar"><div><span>Selected: {this.state.SelectedShape}</span></div></div>

      <div className="shape-list">
      <Shape shape="square" selectShape ={this.selectShape}/>
      <Shape shape="circle" selectShape ={this.selectShape}/>
      <Shape shape="triangle" selectShape ={this.selectShape}/>
      </div>

      </div>
    )

  }
}
export default Selector;
