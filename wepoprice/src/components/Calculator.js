import { useState, useEffect } from "react";
function Button(props) {
  return (
    <div>
      <button onClick={props.compute} id={props.id} className="button">
        {props.value}
      </button>
    </div>
  );
}

export default function Calculator() {
  const [operand, setOperand] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");
  const [update, setUpdate] = useState(0);

  function compute(event) {
    setOperand((prev) => Number(prev + event.target.innerText));
  }

  function selectOperation(event) {
    setOperation(event.target.innerText);
    if (result === 0) {
      setResult(operand);
    }
    setOperand(0);
  }
  function res() {
    if (operation === "+") {
      setResult((prev) => Number(prev) + operand);
    } else if (operation === "-") {
      setResult((prev) => Number(prev) - operand);
    } else if (operation === "*") {
      setResult((prev) => Number(prev) * operand);
    } else if (operation === "/") {
      setResult((prev) => Number(prev) / operand);
    } else if (operation === "%") {
      setResult((prev) => Number(prev) % operand);
    } else if (operation === "pwr") {
      setResult((prev) => {
        let x = 1;
        for (let i = 0; i < operand; i++) {
          x *= Number(prev);
        }
        return x;
      });
    } else if (operation === "sqrt") {
      setResult((prev) => Math.sqrt(prev).toFixed(2));
    }
    setOperand(0);
    setOperation("");
    setUpdate(0);
  }
  useEffect(() => {
    console.log(`${operand} and the ${result} and ${update}`);
  }, [operation, update, operand, result]);

  function clear() {
    setOperand(0);
    setResult(0);
    setUpdate(0);
    setOperation("");
  }
  return (
    <div className="bg">
      <div className="result">
        <p style={{ fontSize: "15px" }}>{operand}</p>
        <p id ="res">= {result}</p>
      </div>
      <div className="input">
        <div className="digit">
          <Button compute={compute} value={7} />
          <Button compute={compute} value={8} />
          <Button compute={compute} value={9} />
          <Button compute={compute} value={4} />
          <Button compute={compute} value={5} />
          <Button compute={compute} value={6} />
          <Button compute={compute} value={1} />

          <Button compute={compute} value={2} />
          <Button compute={compute} value={3} />
          <Button compute={compute} value={0} />
          <Button compute={compute} value={'00'} />
          <Button compute={compute} value={'000'} />


        </div>
        <div className="operator">
          <Button compute={clear} value="AC" />
          <Button compute={selectOperation} value="*" />
          <Button compute={selectOperation} value="/" />
          <Button compute={selectOperation} value="-" />
          <Button compute={selectOperation} id="plus" value="+" />
          <Button compute={selectOperation} value="%" />
          <Button compute={selectOperation} value="pwr" />
          <Button compute={selectOperation} value="sqrt" />

          <Button compute={res} id="equal" value="=" />
        </div>
      </div>
      {/*<p style={{ color: "rgb(100,100,100)", marginTop: "10px", fontSize: "10px" }}>
        ©️ Mag Mukendi 2022
  </p>*/}
    </div>
  );
}
