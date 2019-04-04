import React, { Component } from 'react'
import withCounter from './withCounter';
export class HoverCounter extends Component {
    render() {
    return (
      <div className="btn">
      <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} Times </h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter);
