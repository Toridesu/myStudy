import { useState } from 'react';

export const Practice1 = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(0);

  const calcTotalFee = (num: number) => {
    const calculatedTotal = num * (1 + taxRate / 100);
    setTotal(calculatedTotal);
  };
  const onclickPractice = () => calcTotalFee(inputValue);

  return (
    <div>
      <h2>税率計算</h2>
      <div>
        <label>金額：</label>
        <input type='number' value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
      </div>
      <div>
        <label>税率（%）：</label>
        <input type='number' value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />
      </div>
      <button onClick={onclickPractice}>計算</button>
      <br />
      <p>合計: {total}円</p>
    </div>
  );
};
