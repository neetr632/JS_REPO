const score = 329
console.log(score) 

const ohm = new Number(121) // strictly setting the var to the numbers datatype
console.log(ohm)

console.log(ohm.toString().length) // chagning the datatype to string and calculating the length of the string
console.log(ohm.toFixed(2)) //help to include precision to the value

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5)) //controllled precision to the numbers

const hundredds = 10000000
console.log(hundredds.toLocaleString('en-IN'))