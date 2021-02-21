let countries = ["SP", "FR", "UK", "PR", "IT"];

//
countries.push("ALE");

let lastCountry = countries.pop();

//
countries.splice(0, 0, lastCountry);
countries.push("POL", "USA", "CAN");
const addNewCountries = ["CHI", "AUS", "LIT", "NZ"];

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

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (let index = 0; index < matrix.length; index++) {
//   for (let col = 0; col < matrix[index].length; col++) {
//     console.log(matrix[index][col]);
//   }
// }

matrix.forEach(function (row) {
  row.forEach(function (num) {
    console.log(num);
  });
});

// console.log("country: ", country);
