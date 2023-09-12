const arr = [1, 25, 7, -7, -3, 12, -22, 0];

// Ý 1
const sort = (arr) => {
  let sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;
};

// Display result
console.log("Ý 1 result: ", sort(arr));
// log: [-22, -7, -3, 0, 1, 7, 12, 25];

console.log("-----------------------------------------") 

// Ý 2
const abs = (number) => {
  const numberToString = Number(number).toString();
  if (numberToString.includes("-"))
    return Number(numberToString.replace("-", ""));
  return number;
};

const sortByAbs = (arr) => {
  let sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i - 1; j++) {
      if (abs(sortedArr[j]) >= abs(sortedArr[j + 1])) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;
};

// Display result
console.log("Ý 2 result: ", sortByAbs(arr));
// log: [0,1,-3,-7,7,12,-22,25];
