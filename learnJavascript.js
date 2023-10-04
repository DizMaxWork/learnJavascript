// Взаимодействие: alert, prompt, confirm
// let name = prompt('Как тебя зовут?', '')
// alert(name);

// function calcNum(circleRadius){
//     let pi = 3.14
//     let radius = Math.pow(circleRadius,2)
//     let calcRadius = Math.round(pi * radius)

//     return calcRadius
// }

// const result = calcNum(6)
// console.log(result);

// Практическое применение функций

// function createElement(tag, id, text){
//     const element = document.createElement(tag)
//     element.id = id
//     element.innerText = text

//     return element
// }
// const elem = createElement('h1', '1', 'some')
// document.body.append(elem)

//Стрелочные функции

// const brokenLinks = ['vk', 'youtube', 'facebook']

// const fixLinksArray = (linkArray) =>{
//     const correctLinks = []
//     linkArray.forEach(function(brokenLink){
//         const fixedLink = 'https://' + brokenLink + '.com'
//         correctLinks.push(fixedLink)
//     })
//     return correctLinks
// }
// console.log(fixLinksArray(brokenLinks));

//Задание по стрелочным функциям

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// Условный оператор Switch

// switch (num) {
//     case 15 : console.log('Ещё год потерпи');
//     break;
//     case 16 : console.log('Ураааааа можно');
// }

//Задачи на If

//1)
// let name =  prompt('Какое «официальное» название JavaScript?', '')
// if(name === 'ECMAScript'){
//     alert('Верно')
// } else{
//     alert('Не знаете? ECMAScript!')
// }

//2)
// let result = (2 + 3 < 4) ? alert('Мало') : alert('Много');

//3)
// let message = prompt('Введите должность', ''); (message == 'Сотрудник') ? alert('Привет') : (message == 'Директор') ? alert('Здравствуйте') : (message == '') ? alert('Нет логина') : alert('')

//Задачи на циклы

// 1)
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 2)
// let input = prompt('Напишите число от 1 до 9')
// let num = Number(input)
// for(let i = 1; i <= 9; i++){
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// 3)
// let input = prompt('Введите число')
// let num = Number(input)
// for(let i = 1; i <= num; i++){
//     console.log(`${num} + ${i} = ${num+i}`);
// }

// 4)
// let input = prompt("Введите строку");
// for (let i = input.length - 1; i >= 0; i--) {
//   console.log(input[i]);
// }

// 5)
// let input = prompt("Введите число");
// let num = Number(input);
// for (let i = 0; i <= num; i += 2) {
//   console.log(i);
// }

//Задачи на объекты

// 1)
// let user = {
//     name: 'John',
//     surname: 'Smith'
// }
// user.name = 'Pete'
// delete user.name
// console.log(user);

// 2)
// function isEmpty(obj){
//     for (let key of obj){
//         return false
//     }
//     return true
// }

// 4)
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   console.log(key);
//   console.log(salaries[key]);
//   sum += salaries[key];
// }
// console.log("Итого: " + sum);

// 5)
// function multiplyNumeric() {
//   let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//   };
//   for (let obj in menu) {
//     if (typeof menu[obj] == "number") {
//       menu[obj] *= 2;
//       console.log(menu[obj]);
//     }
//   }
// }
// multiplyNumeric();