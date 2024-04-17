// const user = new Object() // singleton object
const user = {} // non singleton object

user.id = "1234"
user.name = "Mukul"
user.loggedIn = false

console.log(user)

// nested objects
const regUser = {
    email: "goyalmukul1111@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mukul",
            lastname: "Goyal"
        }
    }
}

// console.log(regUser.fullname?.userfullname)

// Assign object into source to target
const o1 = {1 : 1, 2 : 2}
const o2 = {3 : 3, 4 : 4}

// const o3 = {o1, o2}
// const o3 = Object.assign({}, o1, o2) // {} => source o1, o2 => target
const o3 = {...o1, ...o2}
// console.log(o3)

const users = [
    {
        id: 1,
        name: "MOh"
    },
    {
        id: 1,
        name: "MOh"
    },
    {
        id: 1,
        name: "MOh"
    },
    {
        id: 1,
        name: "MOh"
    },

]

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('name'))

// Object destructuring
const course = {
    coursename: "js in hindi",
    price: "9890",
    courseInstructor: "Mukul"
}

// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor)


// API
// JSON
// {
//     "name": "Mukul",
//     "place": 'Jaipur'
    
// }

