const name = "Mukul"
const lastName = new String('Goyal')
console.log(lastName[0])
console.log(`my name is ${name}`)
console.log(lastName.length)
console.log(lastName.toUpperCase())
console.log(lastName.charAt(2))
console.log(lastName.indexOf('l'))

const str = lastName.substring(0, 4)
console.log(str)

const str1 = lastName.slice(-4, 2)
console.log(str1)

const newStr = "  Mukul  "
console.log(newStr.trim())

const url = "http://google.com/mukul"
console.log(url.replace('mukul', 'goyal'))
console.log(url.includes('mukul'))

const myName = "My name is mukul goyal"
console.log(myName.split(' '))