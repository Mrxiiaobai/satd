import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class Button extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    const {text} = this.props
    return (
      <button className="btn">这是一个组件按钮{text}</button>  
    )
  }
}

// Button.propTypes = {
//   text: PropTypes.any
// };

export default Button;