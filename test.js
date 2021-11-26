function a(n) {
    for (let i = 0; i <n ; i++) {
        console.log(bb(i))
    }
    for (let i = n; i > 0 ; i--) {
        console.log(bb(i))
    }
}

function bb(n) {
    let str = ''
    for (let i = 0; i < n ; i++) {
        str += '*'
    }
    return str
}

a(8)

