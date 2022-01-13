import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="output">0</div>
        <div className="btns">
          <button id="ac" type="button" className="btn">AC</button>
          <button id="plusminus" type="button" className="btn">+/-</button>
          <button id="percent" type="button" className="btn">%</button>
          <button id="mod" type="button" className="btn">/</button>
          <button id="seven" type="button" className="btn">7</button>
          <button id="eight" type="button" className="btn">8</button>
          <button id="nine" type="button" className="btn">9</button>
          <button id="multiply" type="button" className="btn">x</button>
          <button id="four" type="button" className="btn">4</button>
          <button id="five" type="button" className="btn">5</button>
          <button id="six" type="button" className="btn">6</button>
          <button id="minus" type="button" className="btn">-</button>
          <button id="one" type="button" className="btn">1</button>
          <button id="two" type="button" className="btn">2</button>
          <button id="three" type="button" className="btn">3</button>
          <button id="plus" type="button" className="btn">+</button>
          <button id="zero" type="button" className="btn">0</button>
          <button id="dot" type="button" className="btn">.</button>
          <button id="equals" type="button" className="btn">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;