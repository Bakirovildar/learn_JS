
var person = {
    name: 'Igor',
    year: 1986,
    family: ['Vika', 'Kostya', 'Katya'],
    car: {
        model: 'Mercedes',
        year: 2021
    },
    calculateAge: function () {
        this.age = 2021 - this.year // Новый ключ со значением
    }
}
person.car.model = 'BMW'
person.family[0] = 'Marina'
