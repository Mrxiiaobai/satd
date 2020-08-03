import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class Button extends Component{
  static propTypes = {
    text: PropTypes.string
  }
  static defaultProps = {
    text:'123'
  }
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
export default Button;