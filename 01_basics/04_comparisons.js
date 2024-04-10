// >, <, >=, <=, ==, !=
// automatically converts string to numbers
console.log(2 > "1")
console.log("02" > 1)

// comparisons works differently null is converted to 0 in  >=
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null < 0) // false
console.log(null >= 0) // true

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

// === strict check (not type conversion)

console.log("1" === 1) // false