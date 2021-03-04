// console.log('antes del setTimeout');
// const id = setInterval(function () {
//   console.log('hola');
// }, 1000);

// setTimeout(function () {
//   console.log('soy una callback function');
//   clearInterval(id);
// }, 5000);

// console.log('despues del setTimeout');

function sayHi() {
  console.log('Hi');
}

function sayThereAsync(cb) {
  if (typeof cb === 'function') {
    setTimeout(function () {
      console.log('there');
      cb();
    }, 4000);
  } else {
    throw new Error('cb is not a function');
  }
}

function sayIronhack() {
  console.log('Ironhackers');
}

sayThereAsync(function () {
  sayIronhack();
});
sayHi();

// function myMap(arr, cb) {
//   const newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     newArr.push(cb(arr[index]));
//   }
//   return newArr;
// }

// const result = myMap([1, 2, 4], function (elem) {
//   return elem * 2;
// });
// console.log('result', result);
