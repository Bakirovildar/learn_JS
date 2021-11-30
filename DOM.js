var h1 = document.querySelector('h1')
var input = document.querySelector('input')
var button = document.querySelector('button')
var body = document.querySelector('body')

body.addEventListener("mouseenter", function () {
    body.style.backgroundColor = 'aqua'
})

body.addEventListener("mouseleave", function () {
    body.style.backgroundColor = 'blue'
})

button.addEventListener("click", function () {
    h1.textContent = input.value
})