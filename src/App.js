import React, { Component } from 'react';
import './dist/css/style.min.css';

class App extends Component {
  state = {
    value: null,
    currDisplayValue: '0',
    displayEquation: '0',
    operator: null,
    nextOperand: false,
  };

  clearBtn() {
    this.setState({
      value: null,
      currDisplayValue: '0',
      displayEquation: '0',
      operator: null,
      nextOperand: false,
    });
  }

  deleteBtn() {
    const { currDisplayValue } = this.state;
    this.setState({
      currDisplayValue:
        currDisplayValue.substring(0, currDisplayValue.length - 1) || '0',
    });
  }

  displayDecimal() {
    const { currDisplayValue, nextOperand } = this.state;
    if (nextOperand) {
      this.setState({
        currDisplayValue: '.',
        nextOperand: false,
      });
    } else if (currDisplayValue.indexOf('.') === -1) {
      this.setState({
        currDisplayValue: currDisplayValue + '.',
        nextOperand: false,
      });
    }
  }

  calcNum(num) {
    const { currDisplayValue, nextOperand } = this.state;
    if (nextOperand) {
      this.setState({
        currDisplayValue: String(num),
        nextOperand: false,
        displayEquation: currDisplayValue,
      });
    } else {
      this.setState({
        currDisplayValue:
          currDisplayValue === '0' ? String(num) : currDisplayValue + num,
        displayEquation: String(num),
      });
    }
  }

  calcOperation(nextOperator) {
    const { value, currDisplayValue, operator, displayEquation } = this.state;
    const newValue = parseFloat(currDisplayValue);

    const calculations = {
      '/': (preValue, nextValue) => preValue / nextValue,
      '*': (preValue, nextValue) => preValue * nextValue,
      '+': (preValue, nextValue) => preValue + nextValue,
      '-': (preValue, nextValue) => preValue - nextValue,
      '=': (preValue, nextValue) => nextValue,
    };

    if (value == null) {
      this.setState({
        value: newValue,
        displayEquation: currDisplayValue + nextOperator,
      });
    } else if (operator) {
      const currentValue = value || 0;

      const finalCalculatedValue = calculations[operator](
        currentValue,
        newValue
      );

      this.setState({
        displayEquation: currDisplayValue + nextOperator,
        value: finalCalculatedValue,
        currDisplayValue: String(finalCalculatedValue),
      });
    }
    this.setState({
      nextOperand: true,
      operator: nextOperator,
    });
  }

  render() {
    const { currDisplayValue, displayEquation } = this.state;
    return (
      <div className='grid'>
        <div id='display-screen'>
          <div className='previous-operator'>{displayEquation}</div>
          <div id='display' className='current-operator'>
            {currDisplayValue}
          </div>
        </div>
        <button
          id='clear'
          className='two-column uppercase'
          onClick={() => this.clearBtn()}
        >
          Clear
        </button>
        <button
          id='delete'
          className='uppercase'
          onClick={() => this.deleteBtn()}
        >
          Del
        </button>
        <button
          id='divide'
          className='symbol'
          onClick={() => this.calcOperation('/')}
        >
          ÷
        </button>
        <button id='one' className='number' onClick={() => this.calcNum(1)}>
          1
        </button>
        <button id='two' className='number' onClick={() => this.calcNum(2)}>
          2
        </button>
        <button id='three' className='number' onClick={() => this.calcNum(3)}>
          3
        </button>
        <button
          id='multiply'
          className='symbol'
          onClick={() => this.calcOperation('*')}
        >
          *
        </button>
        <button id='four' className='number' onClick={() => this.calcNum(4)}>
          4
        </button>
        <button id='five' className='number' onClick={() => this.calcNum(5)}>
          5
        </button>
        <button id='six' className='number' onClick={() => this.calcNum(6)}>
          6
        </button>
        <button
          id='add'
          className='symbol'
          onClick={() => this.calcOperation('+')}
        >
          +
        </button>
        <button id='seven' className='number' onClick={() => this.calcNum(7)}>
          7
        </button>
        <button id='eight' className='number' onClick={() => this.calcNum(8)}>
          8
        </button>
        <button id='nine' className='number' onClick={() => this.calcNum(9)}>
          9
        </button>
        <button
          id='subtract'
          className='symbol'
          onClick={() => this.calcOperation('-')}
        >
          -
        </button>
        <button
          id='zero'
          className='number two-column'
          onClick={() => this.calcNum(0)}
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

        <button
          id='equals'
          className='symbol'
          onClick={() => this.calcOperation('=')}
        >
          =
        </button>
      </div>
    );
  }
}

export default App;
