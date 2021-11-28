var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue
    }
    console.log(numbers[i])
}