class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`My name is ${this.name}`);
  }
}

class TA extends Student {
  constructor(name, age, expertise) {
    super(name, age);
    this.expertise = expertise;
  }
  sayHello() {
    console.log(
      `My name is ${this.name} and my expertise is ${this.expertise}`
    );
  }
  solveProblem(student) {
    console.log(`fixing problem to studen ${student.name}`);
  }
}

const student1 = new Student('Laia', 25);
const taAle = new TA('Ale', 23, 'HTML, CSS');
