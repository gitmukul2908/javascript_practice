// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 2) // month starts with 0
// let myCreatedDate = new Date(2023, 0, 2, 5, 30, 23, 23) 
// let myCreatedDate = new Date("2000-01-23") 
let myCreatedDate = new Date("01-14-2033")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now() // gives date in ms
// console.log(myTimeStamp)

let newDate = new Date()
// console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default', {
    month: "long"
}))