// function a(name) {
//     return function (age) {
//         console.log(name,age)
//     }
// }
//
// var aa= a('Ildar')
// aa(25)
//
// Рекурсия
// function timer (n) {
//     if (n > 60) {
//         return
//     }
//     setTimeout(() => {
//         console.log(n)
//         return timer(n+1)
//     }, 100)
// }
//
// var ff = timer(1)
//
// console.log(ff)


//Замыкания
// function nameAge(name) {
//     return function (age) {
//         return console.log(name, age)
//     }
// }
//
// var name1 = nameAge('Ildar')
// name1(25)
//
// var name2 = nameAge('Zarina')
// name2(20)


//Массивы
// var age = [18,32,25,20,15]
// var age2 = [22,38]
// console.log(age)
//
// age.push(27)
// console.log(age)
//
// console.log(age.join('-'))

// function list () {
//     console.log('Сегодня я делал: ')
//     let length = arguments.length
//     for (let i = 0; i < length; i++) {
//         console.log((i+1) + '- ' + arguments[i])
//     }
// }
//
// list('сходил в больницу', 'сходил в аптеку', 'домой пошел', 'покушал', 'пошел в больницу', 'вырвали зуб', 'сходил к бабушке')
//
// function draw (n) {
//     for (let i = 0; i < n; i++) {
//         console.log(drawTriangle(i))
//     }
//     for (let i = n; i > 0 ; i--) {
//         console.log(drawTriangle(i))
//     }
// }
//
// function drawTriangle (n) {
//     let line = ''
//     for (let i = 0; i < n; i++) {
//         line = line + '*'
//     }
//     return line
// }
//
// draw(5)

//Типы Данных
// var num = 3
//
// var string = 'hello1'
//
// var boolea = true
//
// var object = {a: 4}
//
// var nul = null
//
// var undefine = undefined
//
// console.log()

// Операторы + - / *
var num1 = 12
var num2 = 2

var str1 = 'Hello'
var str2 = 'World'

console.log('5' - '7')

// Приоритеты
// var vv = 5 + 5 * 5 > 40
//
// console.log(vv)