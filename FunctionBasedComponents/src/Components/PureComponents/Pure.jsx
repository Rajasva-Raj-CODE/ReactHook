import React, { PureComponent,Component } from 'react'

 class Pure extends PureComponent {
     constructor(){
    super()
     this.state={
        count:0
     }
    }
  render() {
    console.log("Re-Rendering");
    
    return (
      <>
        <h2>Pure Components In React</h2>
        <h3>Count:{this.state.count}</h3>
        <button onClick={()=>this.setState({count:1})}>Counter</button>
      </>
    )
  }
}

export default Pure


//! Bascially pure components are used in class based components  