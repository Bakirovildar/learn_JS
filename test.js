function sharp(n) {
    for (let i = 0; i < n; i++) {
        console.log(sharpLine(i))
    }
}

function sharpLine(n) {
    let one = ' # # # # #'
    let two = '# # # # #'
    if (n % 2 === 0) {
        return two
    } else {
        return one
    }
}

sharp(8)

