import { useState } from "react";
// import "./styles.css";

export default function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(100);
  const [processingFee, setProcessingFee] = useState(1);
  const [downpayment, setDownpayment] = useState(0);
  const [loan, setLoan] = useState(0);
  const [tenure, setTenure] = useState(12);

  const updateCost = (e) => {
    const cost = Number(e.target.value);
    setCost(cost);
    setLoan(cost);  // Set loan to full cost initially
  };

  const updateInterest = (e) => {
    const cost = Number(e.target.value);
    setInterest(cost);
  };

  const updateProFees = (e) => {
    const cost = Number(e.target.value);
    setProcessingFee(cost);
  };

  const updateDownPayment = (e) => {
    const cst = Number(e.target.value);
    setDownpayment(cst);
    setLoan(cost - cst);  // Update loan amount after downpayment
  };

  const updateTenure = (months) => {
    setTenure(months);
  };

  const calculateEMI = (l, I, T) => {
    if (l === 0) return 0;
    // EMI formula
    const rte = I / 100 / 12;
    const emi = (l * rte * Math.pow(1 + rte, T)) / (Math.pow(1 + rte, T) - 1);
    return emi;
  };

  return (
    <div className="App">
      <span style={{ textAlign: "center", fontSize: 30 }}>EMI Calculator</span>

      {/* Total cost */}
      <div className="working-area">
        <div className="inputs">
          <h4>Total Cost of Assets</h4>
          <input
            type="number"
            value={cost}
            onChange={updateCost}
            placeholder="Total cost per Asset"
          />
          <h4>Interest Rate (in %)</h4>
          <input type="number" value={interest} onChange={updateInterest} />

          <h4>Processing Fees (in %)</h4>
          <input type="number" value={processingFee} onChange={updateProFees} />

          <div className="sliders">
            <h5>Down Payment</h5>
            <input
              type="range"
              min="0"
              max={cost}
              value={downpayment}
              onChange={updateDownPayment}
            />
            <div className="labels">
              <label>0%</label>
              <b>{downpayment}</b>
              <label>100%</label>
            </div>
          </div>

          <div className="sliders">
            <h5>Loan per Month</h5>
            <input
              type="range"
              min="0"
              max={cost - downpayment}
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
            />
            <div className="labels">
              <label>{calculateEMI(loan, interest, tenure).toFixed(2)}</label>
              <b>{loan}</b>
              <label>{cost - downpayment}</label>
            </div>
          </div>

          <div className="tenure-buttons">
            <h5>Select Tenure (Months)</h5>
            <div className="button-group">
              {[12, 24, 36, 48, 60].map((value) => (
                <button
                  key={value}
                  onClick={() => updateTenure(value)}
                  className={tenure === value ? "active" : ""}
                >
                  {value} months
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
