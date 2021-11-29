
//DOM

//Обращение к тегам, классам и id:

var h1 = document.querySelector('h1') // элемент
var p = document.querySelector('p') // элемент
var names = document.querySelectorAll('.sity') // .класс
var red = document.querySelector('#red') // #id
var s = document.querySelector('.y > .ss > ul') // ul дочерний к .ss, а .ss к .y

//Добавить и изменить

s.innerHTML = '<h1 style="color: aquamarine"> Learn JavaScript</h1>'// innerHTML добавить что то
h1.textContent = 'DOM (Document Object Model)'  // Изменил h1 c .textContent
