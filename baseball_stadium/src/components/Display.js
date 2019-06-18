import React, { Component } from 'react';

/* 
- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.
 */

class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <h1>Display</h1>
          <h5>Display will show the count of "balls" and "strikes"</h5>
          <h2>Ball Count: {this.props.state.ballCount}</h2>
          <h2>Strike Count: {this.props.state.strikeCount}</h2>
        </div>
      );
    }
  }
  
  export default Display;