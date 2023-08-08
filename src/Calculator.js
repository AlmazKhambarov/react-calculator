import React, { useState } from "react";
import './Calc.css'
const Calculator = () => {
  const [output, setOutput] = useState("");

  const display = (num) => {
    setOutput(output + num);
  };

  const calculate = () => {
    try {
      setOutput(eval(output));
    } catch (err) {
      alert("Invalid");
    }
  };

  const clear = () => {
    setOutput("");
  };

  const del = () => {
    setOutput(output.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          placeholder="0"
          value={output}
          onChange={(e) => display(e.target.value)}
        />
        <button onClick={clear} className="red" title="Clear">
          Cl
        </button>
        <button onClick={del} disabled title="Delete">
          Del
        </button>
        <button onClick={() => display("%")} title="Percentage">
          %
        </button>
        <button onClick={() => display("/")} title="Divide">
          /
        </button>
        <button onClick={() => display("7")} title="7">
          7
        </button>
        <button onClick={() => display("8")} title="8">
          8
        </button>
        <button onClick={() => display("9")} title="9">
          9
        </button>
        <button onClick={() => display("*")} title="Multiply">
          *
        </button>
        <button onClick={() => display("4")} title="4">
          4
        </button>
        <button onClick={() => display("5")} title="5">
          5
        </button>
        <button onClick={() => display("6")} title="6">
          6
        </button>
        <button onClick={() => display("-")} title="Subtract">
          -
        </button>
        <button onClick={() => display("1")} title="1">
          1
        </button>
        <button onClick={() => display("2")} title="2">
          2
        </button>
        <button onClick={() => display("3")} title="3">
          3
        </button>
        <button onClick={() => display("+")} title="Add">
          +
        </button>
        <button onClick={() => display(".")} title="Decimal">
          .
        </button>
        <button onClick={() => display("0")} title="0">
          0
        </button>
        <button onClick={calculate} className="change red" title="Calculate">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
