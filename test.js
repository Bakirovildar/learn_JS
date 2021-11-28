var personName = 'Victor Classon!!!'

console.log(personName.toUpperCase())// Все с большими
console.log(personName.toLowerCase()) // Все с маленькими
console.log(personName.charAt(0)) // Выводит 0 индекс т.е букву 'V'
console.log(personName.indexOf('o')) // 4 Так как "о" по индексу 4
console.log(personName.indexOf('ro')) // -1 Если нет результата
console.log(personName.substr(1,2)) // Выводит в интервале 2 включительно
console.log(personName.substr(personName.indexOf('Classon'),7)) // Также, только начало через .indexOf
console.log(personName.substring(0,2)) // 2 не включительно

