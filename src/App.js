import React, { Component } from 'react';
import './dist/css/style.min.css';

class App extends Component {
  state = {
    value: '0',
  };

  clearDisplay() {
    this.setState({
      value: '0',
    });
  }

  deleteNum() {
    const { value } = this.state;
    this.setState({
      value: value > 2 ? value.slice(0, 1) : value,
    });
  }

  displayNum(num) {
    const { value } = this.state;
    this.setState({
      value: value === '0' ? String(num) : value + num,
    });
  }

  displayDecimal() {
    const { value } = this.state;
    if (value.indexOf('.') === -1) {
      this.setState({
        value: value + '.',
      });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className='grid'>
        <div id='displayScreen'>
          <div id='prevOperator' className='previous-operator'>
            123+
          </div>
          <div id='display' className='current-operator'>
            {value}
          </div>
        </div>
        <button
          id='clear'
          className='two-column uppercase'
          onClick={() => this.clearDisplay()}
        >
          Clear
        </button>
        <button
          id='delete'
          className='uppercase'
          onClick={() => this.deleteNum()}
        >
          Del
        </button>
        <button
          id='divide'
          className='symbol'
          onClick={() => this.calcOperator('/')}
        >
          ÷
        </button>
        <button id='one' className='number' onClick={() => this.displayNum(1)}>
          1
        </button>
        <button id='two' className='number' onClick={() => this.displayNum(2)}>
          2
        </button>
        <button
          id='three'
          className='number'
          onClick={() => this.displayNum(3)}
        >
          3
        </button>
        <button
          id='multiply'
          className='symbol'
          onClick={() => this.calcOperator('*')}
        >
          *
        </button>
        <button id='four' className='number' onClick={() => this.displayNum(4)}>
          4
        </button>
        <button id='five' className='number' onClick={() => this.displayNum(5)}>
          5
        </button>
        <button id='six' className='number' onClick={() => this.displayNum(6)}>
          6
        </button>
        <button
          id='add'
          className='symbol'
          onClick={() => this.calcOperator('+')}
        >
          +
        </button>
        <button
          id='seven'
          className='number'
          onClick={() => this.displayNum(7)}
        >
          7
        </button>
        <button
          id='eight'
          className='number'
          onClick={() => this.displayNum(8)}
        >
          8
        </button>
        <button id='nine' className='number' onClick={() => this.displayNum(9)}>
          9
        </button>
        <button
          id='subtract'
          className='symbol'
          onClick={() => this.calcOperator('-')}
        >
          -
        </button>
        <button
          id='zero'
          className='number two-column'
          onClick={() => this.number(0)}
        >
          0
        </button>
        <button
          id='decimal'
          className='symbol'
          onClick={() => this.displayDecimal()}
        >
          .
        </button>

        <button id='equals' className='symbol'>
          =
        </button>
      </div>
    );
  }
}

export default App;
