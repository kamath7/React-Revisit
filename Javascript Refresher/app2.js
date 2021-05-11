//Spread and rest operator

//Spread - used to split up array elements or obj props
//Rest - used to merge list of function arguements into an array
const numbers = [1,2,3]
const someMore = [...numbers, 4]
console.log(someMore)

const someObj = {
    'fname': 'John',
    'lname': 'Doe'
}
const newObj = {
    ...someObj,
    age: 69
}
console.log(newObj)

const oddNumberFilter = (...args)=> args.filter((n)=> n % 2 !==0)
console.log(oddNumberFilter(1,2,3,78,99)

)