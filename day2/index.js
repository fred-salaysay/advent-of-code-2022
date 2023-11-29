const { readInput } = require("../readInput")

const input = readInput("day2")

// A 1 Rock         X 1 Rock        >> Scissors << Paper
// B 2 Paper        Y 2 Paper       >> Rock << Scissors
// C 3 Scissors     Z 3 Scissors    >> Paper << Rock
const iGuide = new Map();

iGuide.set("A>Z", 3) // 3 + 0
iGuide.set("A<Y", 8) // 2 + 6
iGuide.set("A=X", 4) // 3 + 1
iGuide.set("B>X", 1) // 1 + 0
iGuide.set("B=Y", 5) // 2 + 3
iGuide.set("B<Z", 9) // 3 + 6
iGuide.set("C>Y", 2) // 2 + 0
iGuide.set("C<X", 7) // 1 + 6
iGuide.set("C=Z", 6) // 3 + 3

const fGuide = new Map();

// X - lose - 0
// Y - draw - 3
// Z - win - 6
fGuide.set("A X", 3) // 3 + 0
fGuide.set("A Y", 4) // 1 + 3
fGuide.set("A Z", 8) // 2 + 6
fGuide.set("B X", 1) // 1 + 0
fGuide.set("B Y", 5) // 2 + 3
fGuide.set("B Z", 9) // 3 + 6
fGuide.set("C X", 2) // 2 + 0
fGuide.set("C Y", 6) // 3 + 3
fGuide.set("C Z", 7) // 1 + 6

const run = (input) => {
    const answers = input.split(" ");
    // console.log(answers) // [x, y]
    const x = answers[0] // opponent
    const y = answers[1] // me
    // console.log(x, y) // x y

    const key = [ ...iGuide.keys() ].find(v => v.charAt(0) === x && v.charAt(2) === y)
    return iGuide.get(key);
};

const run2 = (input) => {
    const answers = input.split(" ");
    // console.log(answers) // [x, y]
    const x = answers[0] // opponent
    const y = answers[1] // me
    // console.log(x, y) // x y

    const key = [ ...fGuide.keys() ].find(v => v.charAt(0) === x && v.charAt(2) === y)
    return fGuide.get(key);
};

const games = input.split("\n")
const total = games.map(run).reduce((acc, v) => acc + v, 0)
const total2 = games.map(run2).reduce((acc, v) => acc + v, 0)

console.log("========== DAY 2 ==========")
console.log(`Total: ${total}`)
console.log(`Total2: ${total2}`)
