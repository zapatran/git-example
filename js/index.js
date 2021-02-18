let name = "Ironhack";
let age = 23;
let isMarried = false;
let notInitialize;

// Ejemplo switch
// let language = prompt("type a language").toLowerCase();

// // let languageInLowercase = language.toLowerCase();

// switch (language) {
//   case "spanish":
//     console.log("Hola Mundo");
//     break;
//   case "french":
//     console.log("Bonjour tout le monde");
//     break;
//   case "english":
//     console.log("Hello World");
//     break;
//   default:
//     console.log("Mi no entender");
//     break;
// }

// // Loop While
// let count = 0;

// while (count < 10) {
//   count = count + 1;
//   // count++;
//   console.log("loop", count);
// }

// // Do While
// let count2 = 0;
// do {
//   count2 = count2 + 1;
//   console.log("loop", count2);
// } while (count2 < 10);

// // For loop
// for (let index = 0; index < 20; index++) {
//   console.log("loop", index);
// }

function sayMyNameWithOutConsole(name) {
  // let result;
  // if (typeof name == "string") {
  //   result = "Hello" + name;
  // } else {
  //   console.error("epps no es un string");
  // }
  // return result;
  if (typeof name == "string") {
    return "Hello" + name;
  }
  console.error("epps no es un string");
}

function sayMyNameWithConsole(name) {
  console.log("Hello" + name);
}

console.log(sayMyNameWithOutConsole());
