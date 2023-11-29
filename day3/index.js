const { readInput } = require("../readInput")

const input = readInput("day3").split("\n")

const letters = "abcdefghijklmnopqrstuvwxyz"
const lower = letters.split("")
const upper = letters.toUpperCase().split("")

const guide = [].concat(
    lower.map(
        (x, index) => [x, index + 1]
    ),
).concat(
    upper.map(
        (x, index) => [x, index + 1 + 26]
    )
)

const duplicate = input.map(i => [
    i.trim().substring(0, i.length / 2),
    i.trim().substring(i.length / 2, i.length)
]).map(
    (sack) => [ ...new Set(sack[0])].find(
        y => [ ...new Set(sack[1])].some(z => y === z)
    )
).map(
    dup => guide.find(x => x[0] === dup ? x[1] : false)
).reduce(
    (acc, val) => acc += val[1],
    0
)

// console.log(sack.map(x => console.log(x[0], x[0].length, x[1],x[1].length)))
// console.log(sack.map(x => x[0].length === x[1].length))

console.log("========== DAY 3 ==========")
console.log(`Duplicates: ${duplicate}`);
// console.log(guide);
// console.log("PlMsdjPdGMjdPSrSjgddbLb".length)
// console.log("mHHTszHZzpHmsTFvmpzZzm".length)