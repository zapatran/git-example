// let countries = ['SP', 'FR', 'UK', 'PR', 'IT'];

// //
// countries.push('ALE');

// let lastCountry = countries.pop();

// //
// countries.splice(0, 0, lastCountry);
// countries.push('POL', 'USA', 'CAN');
// const addNewCountries = ['CHI', 'AUS', 'LIT', 'NZ'];

// for (let i = 0; i < addNewCountries.length; i++) {
//   console.log("pais " + addNewCountries[i] + " i " + i);
//   // countries.push(addNewCountries[i]);
// }

// countries.forEach(function (country, i) {
//   console.log("country: ", country, "i " + i);
// });

// let result = 0;
// [1, 2, 4].forEach(function (num, i) {
//   result = result + num;
// });

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let index = 0; index < matrix.length; index++) {
//   for (let col = 0; col < matrix[index].length; col++) {
//     console.log(matrix[index][col]);
//   }
// }

// matrix.forEach(function (row) {
//   row.forEach(function (num) {
//     console.log(num);
//   });
// });

// console.log("country: ", country);
// let arr = [1, 2, 3];
// let newArr = arr.map(function (student, i) {
//   return num + 1;
// });

// function sayHello(name) {
//   console.log('inside func', name.substring(1, 2));
//   return name;
// }

// let result = sayHello('asd');

// const cities = ['bcn', 'miami', 'paris', 'lisbon'];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// const capitalCities = cities.map(function (city) {
//   let result = capitalize(city);
//   return result;
// });

// const filteredCities = cities.filter(function (city) {
//   return city.includes('b');
// });

// const students = [
//   {
//     name: 'Tony Parker',
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 90,
//   },
//   {
//     name: 'Marc Barchini',
//     firstProject: 84,
//     secondProject: 65,
//     finalExam: 65,
//   },
//   {
//     name: 'Claudia Lopez',
//     firstProject: 45,
//     secondProject: 95,
//     finalExam: 99,
//   },
//   {
//     name: 'Alvaro Briattore',
//     firstProject: 82,
//     secondProject: 92,
//     finalExam: 70,
//   },
//   {
//     name: 'Isabel Ortega',
//     firstProject: 90,
//     secondProject: 32,
//     finalExam: 85,
//   },
//   {
//     name: 'Francisco Martinez',
//     firstProject: 90,
//     secondProject: 55,
//     finalExam: 78,
//   },
//   {
//     name: 'Jorge Carrillo',
//     firstProject: 83,
//     secondProject: 77,
//     finalExam: 90,
//   },
//   {
//     name: 'Miguel López',
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 75,
//   },
//   {
//     name: 'Carolina Perez',
//     firstProject: 85,
//     secondProject: 72,
//     finalExam: 67,
//   },
//   {
//     name: 'Ruben Pardo',
//     firstProject: 89,
//     secondProject: 72,
//     finalExam: 65,
//   },
// ];

// const bestStudents = students.filter(function (student) {
//   return student.finalExam >= 90;
// });

// const reducedValue = [9, 4, 1].reduce(function (acc, num, i) {
//   console.log('num', num, 'acc', acc, 'i', i);
//   return num + acc;
// }, 0);

// console.log(reducedValue);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

// const count = fruitBasket.reduce((tally, fruit, i) => {
//   console.log('tally', tally, 'fruit', fruit, 'i', i);

//   // tally[fruit] = (tally[fruit] || 0) + 1;
//   if (tally[fruit] === undefined) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] = tally[fruit] + 1;
//   }

//   return tally;
// }, {});

// console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

// let sayFruit = function (fruit) {
//   console.log(fruit);
//   return 0;
// };

// let sayFruit = (fruit) => {
//   console.log(fruit);
//   return 0;
// };

// fruitBasket.forEach(sayFruit);
// // fruitBasket.forEach( sayFruit() ) ❌

// fruitBasket.forEach(function (fruit) {
//   console.log(fruit);
// });

// fruitBasket.forEach((fruit) => console.log(fruit));

// // arrow functions

// let arrow = (name) => name.substring(1, 2);
// let arrow = (name) => {
//   return name.substring(1, 2);
// };
// let arrow = (name) => {
//   name;
// };

var x = 10;

function showScope(value) {
  let y = 20 + value;
  var s;

  if (y < 1) {
    var z = 30;
  }
  console.log('1', x, y, z);
}

function otra() {
  let y = 10;
  console.log('2', x, y);
}

showScope(1);

otra();
