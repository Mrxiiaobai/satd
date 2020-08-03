import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class Button extends Component{
  static propTypes = {
    text: PropTypes.string
  }
  static defaultProps = {
    value:'按钮'
  }
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    const {children,value} = this.props
    return (
      <button className="btn">{value?value:children}</button>  
    )
  }
}
export default Button;