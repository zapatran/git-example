let car = {
  model: 'BMW',
  color: 'red',
  motor: 2.0,
  doors: 3,
};

for (let key in car) {
  console.log('key', key, 'value', car[key]);
}

delete car.doors;
console.log(car);

let student = {
  name: 'Andrea',
  sayMyName: function () {
    console.log("I'm " + this.name);
  },
};

// school.classRooms[0].students.push({ firstName: 'Celia', age: ?})

'2h 22min'[('2h', '22min')][('2', '22')][(2, 22)][(120, 22)];
142;

const pelis = [{}, {}];

function changeDurationStringToMinutes(movies) {
  movies.sort();
  // movies.forEach((movie) => {
  //   movie.duration = calculateMinutes(movie.duration);
  // });
}

changeDurationStringToMinutes(pelis);

pelis; // [null, {}]
