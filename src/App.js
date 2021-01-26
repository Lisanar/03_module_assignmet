import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const charList = this.state.userInput.split('');
    charList.splice(index, 1);
    const updatedChar = charList.join('');
    this.setState({userInput: updatedChar});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char click={() => this.deleteCharHandler(index)} key={index} char={ch} />
    });

    return (
      <div className="App">
        <input type="text"
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
