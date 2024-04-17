// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "Mukul",
    [mySym]: "key2", // symbol in object
    "full name": "Mukul Goyal",
    age: 18,
    location: "Jaipur"
}

// console.log(JSuser.name)
// console.log(JSuser['age'])
// console.log(JSuser['full name'])
// console.log(JSuser[mySym])

JSuser.name = "Ishank"
// Object.freeze(JSuser) // Objects can't be modified
JSuser.name = "MUkul"
console.log(JSuser)

JSuser.greeting = function(){
    console.log("hello user")
}

console.log(JSuser.greeting())

JSuser.greetingTwo = function(){
    console.log(`Hello my name is ${this.name}`)
}

console.log(JSuser.greetingTwo())

