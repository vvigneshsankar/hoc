import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
import withCounter from './withCounter';
 class ClickCounter extends Component {
  
  render() {
    return (
     <div className="btn">
      <Button onClick={this.props.incrementCount}>Clicked {this.props.count} Times </Button>
      </div>
    )
  }
}
export default withCounter(ClickCounter);
