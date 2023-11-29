const { readInput } = require("../readInput")

const input = readInput("day3").split("\n")

const sack = input.map(i => [
    i.substring(0, i.length / 2),
    i.substring(i.length / 2, i.length - 1)
])

console.log("========== DAY 3 ==========")
console.log(sack);