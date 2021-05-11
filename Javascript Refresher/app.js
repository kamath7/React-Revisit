//let -> variable values
//const -> constant values

var myName = 'Kams'
console.log(myName)
myName = 'Bums'
console.log(myName)

let myName1 = 'Kams'
console.log(myName1)
myName1 = 'Bums'
console.log(myName1)

const myName2 = 'Kams'
console.log(myName2)
// myName2 = 'Bums' //wont let you do it
console.log(myName2)


//Arrow functions

function saySomething(name){
    console.log(`Hello ${name}`)
}
saySomething('Kams')

const saySomethingArrow = (name) => console.log(`Hello ${name} in arrow`)
saySomethingArrow('Lalle')