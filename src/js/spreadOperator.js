export const spreadOperator = () => {
  let value1 = 25,
    value2 = 50;
  let values = [25, 12, 125, 123];
  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/applyA
  // apply()의 첫번째 매개변수는(this.function) max함수를 받는다
  // 2번째 매개변수는 arguments를 받는다.
  // arguments가 나오는 예제들은 arguments = ...args 와 같다
  console.log(Math.max(value1, value2));
  console.log(Math.max.apply(null, values));
  console.log(Math.max(...values));
};
