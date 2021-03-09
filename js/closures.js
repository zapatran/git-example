let num3 = 6;

function suma(num1) {
  return function (num2) {
    return num1 + num2 + num3;
  };
}

const result = suma(2);
// ............
const result2 = suma(4);

console.log(result(1));

// console.log( result2(1) , '🤯 🤯')
