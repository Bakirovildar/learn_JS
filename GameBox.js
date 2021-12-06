var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $timeHader = document.querySelector('#time-header')
var $resultHader = document.querySelector('#result-header')
var $result = document.querySelector('#result')
var $gameTime = document.querySelector('#game-time')

var score = 0
var isGameStart = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', clickGameBox)
$gameTime.addEventListener('input', setTime)

function startGame() {
    score = 0
    $game.style.background = '#fff'
    hide($start)
    setTime()
    $gameTime.setAttribute('disabled', 'true')
    isGameStart = true
    show($timeHader)
    hide($resultHader)


    var interval = setInterval(function () {
        var time = $time.textContent

        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.100).toFixed(1)
        }
    }, 100)

    renderBox()
}

function setTime() {
    var time = +$gameTime.value
    $time.textContent = time
}

function clickGameBox(event) {
    if (event.target.getAttribute('data-box')) {
        score++
        renderBox()
    }
}

function endGame() {
    $game.style.background = '#ccc'
    show($start)
    isGameStart = false
    $game.innerHTML = ''
    hide($timeHader)
    show($resultHader)
    $result.textContent = score
    $gameTime.removeAttribute('disabled')


}

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

function renderBox() {
    if (!isGameStart) {
        return
    }
    $game.innerHTML = ''
    var box = document.createElement('div')
    var sizeBox = getRandom(30, 100)
    var gameParams = $game.getBoundingClientRect()
    var maxTop = getRandom(0, gameParams.height - sizeBox)
    var maxLeft = getRandom(0, gameParams.width - sizeBox)

    box.style.height = box.style.width = sizeBox + 'px'
    box.style.background = 'url("image/beetle-2154.png") no-repeat center'
    box.style.backgroundSize = sizeBox +'px'
    box.style.position = 'absolute'
    box.style.cursor = 'pointer'
    box.style.left = maxLeft + 'px'
    box.style.top = maxTop + 'px'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}