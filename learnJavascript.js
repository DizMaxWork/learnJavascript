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

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

let input = prompt('Напишите число от 1 до 9')
let num = Number(input)
for(let i = 1; i <= 9; i++){
    console.log(`${num} * ${i} = ${num * i}`);
}