//Object destructuring and Array Destructuring
const myObj = {
    fname: 'John',
    lname: 'Doe'
}

const {fname} = myObj
console.log(fname)
const numbers = [1,2,3,4,5,6,7]
const [num1,,num3] = numbers
console.log(num1, num3)

//Reference and Primitive Types
const num11 = 1;
const num12 = num11 
console.log(num12)

//Copy done. Same part of memory accessed
const perObj = {name:'Arnie'}
const perObj2 = perObj
perObj2.name = 'Lalle'
console.log(perObj2, perObj)