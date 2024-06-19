const myArray = [ 12,2,435,123,4,124,245,56]  //array are resizeable

console.log(myArray[2])
const cars = [ "volvo", "tesla", "tata"]

//array methods
myArray.push(4124)
console.log(myArray)
myArray.pop()

myArray.unshift(0) //inserts at the start of the array and the shift does the opposite
console.log(myArray)
console.log("the index of the given element is:",myArray.indexOf(124))
console.log("includes the value 2:",myArray.includes(2)) 

const newArr = myArray.join()

console.log(newArr) //converts into a string


