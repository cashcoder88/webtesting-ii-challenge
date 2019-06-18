import React, { Component } from 'react';
import './design.css'
/* 
- provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect,
 count stays at 2 strikes.
*/



class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <h1 className="dashboard-title">Baseball Dashboard</h1>
          <div className='button-div'>
            <button onClick={this.props.strikeHandler}>Strike</button>
            <button onClick={this.props.ballHandler}>Ball</button>
            <button onClick={this.props.foulHandler}>Foul</button>
            <button onClick={this.props.hitHandler}>Hit</button>
          </div>
        </div>
      );
    }
  }
  
  export default Dashboard;