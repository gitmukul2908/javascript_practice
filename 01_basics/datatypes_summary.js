// classification of datatypes are based on how they are stored and access in memory
// primitive (call by value) and non primitive (call by reference)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let id = Symbol('123')
let id1 = Symbol('123')
console.log(id === id1) // false

let bigNum = 23342323525452343434n

// dynamically typed => variable type need not to be defined

// Reference Type (Non primitive)

// Array, Objects, functions
const fruits = ["Apple", "Mango", "Banana"]

const myObj = {
    name: "Mukul",
    age: "23"
}

function check() {

}

const myFunc = function () {

}

// All non primitive datatypes are object but function datatype is object function

console.table([typeof fruits, typeof myFunc, typeof myObj]);

// *************************************************

// Stack(primitive), Heap(Non-primitive)

// In stack if we assign the value to another variable we get the copy
// but in heap we get the reference to the same value

let myName = "Mukul" // stored in stack
let yourName = myName // stack
yourName = "Ishan" // stack

console.log(myName)
console.log(yourName)

let obj1 = { 
    name: "mukul",
    id: "123"
} // heap

let obj2 = obj1 // refer to obj1 in heap
obj2.id = "345"
console.log(obj1.id)
console.log(obj2.id)