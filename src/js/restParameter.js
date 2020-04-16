// export const pick = (object) => {
//   let result = Object.create(null);
//   for (let i = 1, len = arguments.length; i < len; i++) {
//     // console.log(len);
//     result[arguments[i]] = object[arguments[i]];
//   }
//   console.log(result);
//   return result;
// };

export const pick = (object, ...keys) => {
  // 1.book을 대상으로 args를 순회한다.
  // 2. result에 args를 담은 새로운 객체를 담는다.
  let result = Object.create(null);
  for (let i = 0, len = keys.length; i < len; i++) {
    // console.log(len);
    result[keys[i]] = object[keys[i]];
  }
  console.log(result);
  return result;
};
