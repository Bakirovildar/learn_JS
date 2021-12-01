var divs = document.querySelectorAll('div')
var link = document.querySelector('a')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        event.stopPropagation() // ОСТАНАВЛИВАЕТ ОБРАБОТКУ
        console.log(divs[i].getAttribute('id'))
    }, )

}

link.addEventListener("click", function () { // ПО КЛИКУ
    event.preventDefault() // ССЫЛКА НЕ ПЕРЕХОДИТ

    var div1 = divs[0]

   div1.style.display = div1.style.display === 'none'
       ? 'flex'
       : 'none'
})