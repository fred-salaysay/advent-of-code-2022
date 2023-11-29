const { readInput } = require("../readInput")

const input = readInput("day1")

let index
let max = 0
const elves = input.split("\n\n")
let list = []
let topTotal = 0

for (let i = 0; i < elves.length; i++ ) {
    let total = 0
    const meals = elves[i].split("\n")
    for (const meal of meals) {
        total += Number(meal)
        
        if (total > max) {
            max = total
            index = i
        }

    }

    if (list.length === 0) {
        list.push([ i, total ])
    } else if (list.length < 3) {
        list.push([ i, total ])
    } else {
        for (let y = 0; y < 3; y++) {
            if (list[y][1] < total) {
                list.splice(y, 1, [ i, total ])
                break
            }
        }
    }
}

list.forEach(map => {
    console.log(`Adding ${map[1]} to ${topTotal}`)
    topTotal += map[1]
})

console.log("========== DAY 1 ==========")
console.log("---------- Part One ----------")
console.log(`Elf #${index} is carrying ${max} calories.`)
console.log("\n")
console.log("---------- Part Two ----------")
console.log(`Elf #${list[0][0]} is carrying ${list[0][1]} calories.`)
console.log(`Elf #${list[1][0]} is carrying ${list[1][1]} calories.`)
console.log(`Elf #${list[2][0]} is carrying ${list[2][1]} calories.`)
console.log(`They are carrying a total of ${topTotal} calories.`)
console.log(list)