//Add two numbers without using addition operator

AddWithOutOperator = (numOne, numTwo) => {
  return numOne - -numTwo;
};

const addOne = AddWithOutOperator(4, 4);
console.log(addOne);
