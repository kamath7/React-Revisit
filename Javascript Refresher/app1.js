//Classes

class Car {
    constructor(){
        this.name = 'Fiat'

    }

    whatCar(){
        console.log(`The car is ${this.name}`)
    }
}
class Ambassador extends Car{
    constructor(){
        super()
        this.name = 'Ambassador'
    }
}
class something {
    name ='Tyler Durden'

    foobar = ()=>{
        console.log(this.name)
    }
}

const p1 = new Car()
p1.whatCar()
const p2 = new Ambassador()
p2.whatCar()
const p3 = new something()
console.log(name.foobar()) //Next gen JS
