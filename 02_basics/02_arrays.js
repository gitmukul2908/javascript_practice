const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const allHeros = [...marvel_heros, ...dc]
console.log(allHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))
