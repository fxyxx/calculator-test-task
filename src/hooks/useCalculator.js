import { useState } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { CalculatorContract } from "../utils/contracts/calculatorContract";

const useCalculator = () => {
  const [result, setResult] = useState("");
  const [usageCount, setUsageCount] = useState(0);

  const calculate = async (operation, valueA, valueB) => {
    try {
      const provider = new Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CalculatorContract.address,
        CalculatorContract.abi,
        signer
      );

      const a = parseInt(valueA);
      const b = parseInt(valueB);

      let calculatedResult;

      if (operation === "add") {
        calculatedResult = await contract.add(a, b);
        setResult(a + b);
      } else if (operation === "subtract") {
        calculatedResult = await contract.subtract(a, b);
        setResult(a - b);
      } else if (operation === "multiply") {
        calculatedResult = await contract.multiply(a, b);
        setResult(a * b);
      } else if (operation === "divide") {
        if (b === 0) {
          setResult("Error");
        } else {
          calculatedResult = await contract.divide(a, b);
          setResult(a / b);
        }
      }

      const usageCountValue = await contract.usageCount();
      setUsageCount(usageCountValue.toString());
    } catch (error) {
      console.error(error);
    }
  };

  return { result, usageCount, calculate };
};

export default useCalculator;
