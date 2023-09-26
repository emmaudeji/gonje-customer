import { React, useState } from "react";

const ChooseAmount = ({ setcrAmount }) => {
  const [amount, setAmount] = useState(50);
  const [amountstate, setAmountstate] = useState(0);

  const setPayment = (amount) => {
    setAmount(amount);

    setcrAmount(amount);
  };

  return (
    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
      <div className="gift-wrap">
        <div className="top-heading">
          <h3>Choose Amount</h3>
        </div>
        <div className="gift-amount row">
          <a className="g-card" onClick={() => setPayment(20)}>
            <span>$20</span>
          </a>
          <a className="g-card" onClick={() => setPayment(30)}>
            <span>$30</span>
          </a>
          <a className="g-card" onClick={() => setPayment(50)}>
            <span>$50</span>
          </a>
          <a className="g-card" onClick={() => setPayment(100)}>
            <span>$100</span>
          </a>
          <a className="g-card" onClick={() => setPayment(150)}>
            <span>$150</span>
          </a>
        </div>
        <div className="enter-input">
          <input
            className="form-control"
            id="exampleFormControlInput1"
            type="number"
            placeholder="Enter Custom amount"
            onChange={(e) => setPayment(e.target.value)}
            min={1}
            max={250}
            value={amount}
          />
          {amountstate ? <div>{amountstate}</div> : ""}
        </div>
      </div>
    </div>
  );
};

export default ChooseAmount;
