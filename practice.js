let obj = {
  name: "Max",
  age: 19,
  id: 1,
  adress: {
    city: "Maykop",
    street: "Pushkina",
    number: 114,
  },
};
console.log("Родительский объект");
console.log(obj);
function deepClone(paramObj) {
  paramObj.id = 2;
  paramObj.age = 20;
  paramObj.adress.number = 5;
  paramObj.adress.city = "Moscow";
  console.log("Измененный объект");
  console.log(paramObj);
}
deepClone(structuredClone(obj));
console.log("Измененный родительский объект");
console.log(obj);
