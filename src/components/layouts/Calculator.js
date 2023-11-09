import React, { useState } from "react";
import FormInputGroup from "./FormInputGroup";
// import { FcHome } from "react-icons/fc";
import { FaDollarSign, FaPercent } from "react-icons/fa";

const Calculator = () => {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoanAmount = () => {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  };

  const calculateMonthlyPayment = () => {
    const percentageToDecimal = (percent) => {
      return percent / 12 / 100;
    };

    const yearsToMonths = (year) => {
      return year * 12;
    };

    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );
    return monthlyPayment;
  };

  return (
    <div className="mortgage" style={{ margin: "1rem auto" }}>
      {/* <h4 className="my-5">
        <FcHome /> Mortgage Calculator
      </h4> */}

      <form onSubmit={(e) => e.preventDefault()}>
        <FormInputGroup
          text="Home Value"
          icon={<FaDollarSign />}
          placeholder="Enter the value of the home"
          onkeyup={calculateLoanAmount}
          value={homeValue}
          onInput={(e) => setHomeValue(e.target.value)}
        />
        <FormInputGroup
          text="Down Payment"
          icon={<FaDollarSign />}
          placeholder="Enter your funds"
          onkeyup={calculateLoanAmount}
          value={downPayment}
          onInput={(e) => setDownPayment(e.target.value)}
        />
        <FormInputGroup
          text="Loan Amount"
          icon={<FaDollarSign />}
          placeholder="Funds needed"
          readOnly={true}
          value={loanAmount}
        />
        <FormInputGroup
          text="Interest Rate"
          icon={<FaPercent />}
          placeholder="Enter your interest rate"
          value={interestRate}
          onInput={(e) => setInterestRate(e.target.value)}
        />
        <FormInputGroup
          text="Loan duration (years)"
          placeholder="Enter the duration og your loan in years"
          value={loanDuration}
          onInput={(e) => setLoanDuration(e.target.value)}
        />
        <div className="alert alert-info font-sans text-lg font-bold">
          Monthly payment: ${parseFloat(monthlyPayment.toFixed(2))}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg w-100 center"
          onClick={calculateMonthlyPayment}
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Calculator;
