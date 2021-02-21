let car = {
  model: "BMW",
  color: "red",
  motor: 2.0,
  doors: 3,
};

for (let key in car) {
  console.log("key", key, "value", car[key]);
}

delete car.doors;
console.log(car);

let student = {
  name: "Andrea",
  sayMyName: function () {
    console.log("I'm " + this.name);
  },
};

// school.classRooms[0].students.push({ firstName: 'Celia', age: ?})
