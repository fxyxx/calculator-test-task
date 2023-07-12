import { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Select from "./UI/Select";
import useCalculator from "../hooks/useCalculator";
import { ButtonColor, ButtonSize, MathOperators } from "../enums/enums";

const Calculator = ({ walletAddress }) => {
  const [mathOperation, setMathOperation] = useState("add");
  const [inputTextA, setInputTextA] = useState("");
  const [inputTextB, setInputTextB] = useState("");

  const { result, usageCount, calculate } = useCalculator();

  const handleCalculate = () => {
    calculate(mathOperation, inputTextA, inputTextB);
  };

  return (
    <div className="card">
      <Input
        placeholder={"Number A"}
        type={"number"}
        value={inputTextA}
        setInputText={setInputTextA}
      />
      <Select
        onChange={(operator) => setMathOperation(operator)}
        options={MathOperators}
      ></Select>
      <Input
        placeholder={"Number B"}
        type={"number"}
        value={inputTextB}
        setInputText={setInputTextB}
      />
      <h3 className="flex justify-start items-center pl-2 border rounded-md border-black w-5/6 h-10 font-bold text-lg">{`Result: ${result}`}</h3>
      <Button
        bgColor={ButtonColor.BLUE}
        bgSize={ButtonSize.SUBMIT}
        title="Please connect wallet"
        isWalletConnected={!walletAddress.length > 0 ? true : false}
        buttonOnClick={handleCalculate}
      >
        calculate
      </Button>
      <h3 className="mt-8 px-8 py-1 rounded-md bg-pink-800 text-lg font-bold text-yellow-50">{`Calculator used: ${usageCount} times`}</h3>
    </div>
  );
};

export default Calculator;
