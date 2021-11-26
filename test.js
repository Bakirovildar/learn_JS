function f(arg) {
    console.log('Что я сделал за сегодня: ')
    let length = arguments.length
    for (let i = 0; i < length ; i++) {
        console.log(i + '- ' + arguments[i])
    }
}

f('Поехал в город', 'Написал заявление на расторжение договора страховки', 'Сходил в баню')