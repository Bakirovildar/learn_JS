var person = {
    name: 'Ildar',
    age: 25,
    job: 'Frontend'
}

// for (var key in person) {
//     if (person.hasOwnProperty(key)) // Проверка. Если нету прототипа то вывод ключа
//     console.log(person[key])
// }

Object.keys(person).forEach(function (key) {
    console.log(person[key])  // не пробегается по Прототипам
})