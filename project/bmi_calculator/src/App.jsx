import { useState } from 'react';
import './app.css';

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmiStatus] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightMt = height / 100;
      const bmiValue = weight / (heightMt * heightMt);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setBmiStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setBmiStatus("Overweight");
      } else if (bmiValue >= 30) {
        setBmiStatus("Obesity");
      }
    } else {
      setBmi(null);
      setBmiStatus("");
    }
  };

  return (
    <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1>BMI CALCULATOR</h1>
        <div className="input-container">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            name="height"
            id="height"
          />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            name="weight"
            id="weight"
          />
        </div>

        <button onClick={calculateBMI} aria-label="Calculate BMI">
          Calculate
        </button>

        {bmi !==null && (
          <div className="result">
            <p>Your BMI: {bmi}</p>
            <p>Status: {bmistatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
