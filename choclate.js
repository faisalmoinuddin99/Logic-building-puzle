//Program for Chocolate and Wrapper Puzzle

function ChoclateProblem(money, price = 1, wapper = 3) {
  return {
    money,
    price,
    wapper,
    calculation() {
      if (money < price) {
        return 0;
      }
      let choc = money / price;
      choc = choc + (choc - 1) / (wapper - 1);
      return choc;
    }
  };
}

const personOne = ChoclateProblem(15);
console.log(personOne.calculation());
