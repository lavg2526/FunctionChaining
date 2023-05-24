//Function chaining.
//Want to chain the functions one after the another
//to get the result

let calc = (num) => {
  let result = num;

  let add = (int) => {
    result += int;
    return calc(result);
  };

  let sub = (int) => {
    result -= int;
    return calc(result);
  };

  let mul = (int) => {
    result *= int;
    return calc(result);
  };

  let div = (int) => {
    result /= int;
    return calc(result);
  };

  let get = () => {
    return result;
  };

  return { add, sub, mul, div, get };
};

let chainFunction = calc(2).add(2).sub(1).mul(4).div(2).get();
console.log(chainFunction);
