const fruits = ["apple", "banana", "orange", "mango", "kiwi"] //extracts elements from the array permenantly 
const slicedfruits = fruits.slice(1, 3);
console.log("normal array of fruits:-", fruits)
console.log("sliced array of fruits:-", slicedfruits)

fruits.splice(1,2) //removes elements from the array permenantly 
console.log(fruits)

fruits.splice(2, 0, "pink", "black") //since the delete count is 0 and the starting index is provided with the values therefore they will be added.
console.log(fruits)
console.log(fruits.length)
