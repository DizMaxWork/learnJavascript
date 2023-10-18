// let obj = {
//   name: "Max",
//   age: 19,
//   id: 1,
//   adress: {
//     city: "Maykop",
//     street: "Pushkina",
//     number: 114,
//   },
// };
// console.log("Родительский объект");
// console.log(obj);
// function deepClone(paramObj) {
//   paramObj.id = 2;
//   paramObj.age = 20;
//   paramObj.adress.number = 5;
//   paramObj.adress.city = "Moscow";
//   console.log("Измененный объект");
//   console.log(paramObj);
// }
// deepClone(structuredClone(obj));

let user = {
  name: "Max",
  age: 19,
  id: 1,
  adress: {
    city: "Maykop",
    street: "Pushkina",
    number: 114,
  },
  parent: {
    "solomikyna-e": {
      age: 55,
    },
    "solomikyn-a": {
      age: 57,
    },
  },
};

function deepClone(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] == "object") {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  console.log(newObj);
}
deepClone(user);

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };
// console.log(pockets.pen);
// console.log(bed.glasses);
