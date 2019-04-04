import React, { Component } from 'react'

const withCounter=(WrappedComponent) =>{  
class withCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  incrementCount=()=>{
    this.setState({count:this.state.count+1});
  }
  render() {
    return (
      <WrappedComponent
        count={this.state.count}
        incrementCount={this.incrementCount}
      />
    )
  }
}
return withCounter
}

export default withCounter
