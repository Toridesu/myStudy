import React from "react";

export const Practice1 = () => {
  const onclickPractice = () => alert("")
  return(
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onclickPractice}>練習問題1を実行</button>
    </div>
  )
}