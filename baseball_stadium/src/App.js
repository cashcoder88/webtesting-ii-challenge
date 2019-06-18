import React, { Component } from 'react';
import './components/design.css';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

/* 
- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect,
 count stays at 2 strikes.
*/


class App extends Component {
  state = {
    ballCount: 0,
    strikeCount: 0,
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  }

  ballHandler = () => {
    if (this.state.ballCount > 2) {
      alert(`Four Balls, You're Out!`)
      this.setState({
        ballCount: 0,
        strikeCount: 0
      })
    } else {

      this.setState({
        ballCount: this.state.ballCount + 1
      })
    }
  }

  strikeHandler = () => {
    if (this.state.strikeCount > 1) {
      alert(`Three Strikes, You're OUT!`)
      this.setState({
        ballCount: 0,
        strikeCount: 0
      })
    } else {
      this.setState({
        strikeCount: this.state.strikeCount + 1
      })
    }
  }

  hitHandler = () => {
    alert(`It's A Hit! Strikes and Balls Reset`)
    this.setState({
      ballCount: 0,
      strikeCount: 0
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome To The Baseball App, By Cash Globe</h1>
        <Display state={this.state}/>
        <Dashboard 
          state={this.state} 
          ballHandler={this.ballHandler} 
          strikeHandler={this.strikeHandler} 
          hitHandler={this.hitHandler}
        />
      </div>
    );
  }
}

export default App;
