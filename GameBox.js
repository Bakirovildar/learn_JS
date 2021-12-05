var $game = document.querySelector('#game')
var $start = document.querySelector('#start')
var $time = document.querySelector('#time')
var $timeHader = document.querySelector('#time-header')
var $resultHader = document.querySelector('#result-header')
var $result = document.querySelector('#result')
var $gameTime = document.querySelector('#game-time')

var score = 0
var isGameStarted = false
var colors = ['violet', 'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'yellow']


$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setTime)

function startGame() {
    score = 0
    setTime()
    $gameTime.setAttribute('disabled', 'true')
    show($timeHader)
    hide($resultHader)
    isGameStarted = true
    $game.style.background = '#fff'
    hide($start)
    var interval = setInterval(function () {
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            clearInterval(interval)
            endGame()

        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }

    }, 100)

    renderBox()
}

function setTime() {
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
}

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

function setResult() {
    $result.textContent = score.toString()
}

function endGame() {
    isGameStarted = false
    $gameTime.removeAttribute('disabled')
    show($start)
    $game.style.background = '#ccc'
    $game.innerHTML = ''
    hide($timeHader)
    show($resultHader)
    setResult()

}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }
    if (event.target.getAttribute('data-box')) {
        score++
        renderBox()
    }
}

function renderBox() {

    $game.innerHTML = ''
    var box = document.createElement('div')
    var sizeBox = getRandom(30, 100)
    var gameBox = $game.getBoundingClientRect()
    var maxTop = gameBox.height - sizeBox
    var maxLeft = gameBox.width - sizeBox
    var colorRand = getRandom(0, colors.length - 1)

    box.style.width = box.style.height = sizeBox + 'px'
    box.style.background = colors[colorRand]
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.position = 'absolute'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement("afterbegin", box)
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}