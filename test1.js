// Câu 1
const sum = (number) => {
  if (number > 0) return number + sum(number - 1);
  else return number;
};

// const number = 0;
// const number = 1;
// const number = 3;
const number = 10;

// display the result
console.log(`The sum: ${sum(10)}`);



