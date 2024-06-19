const mavel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "Flash", "Batman"]

mavel_heros.push(dc_heros) //this will nest the arrays and this is not suitable for all the situations
console.log(mavel_heros) //result will be a nested array

const allheros = mavel_heros.concat(dc_heros) //NEW ARRAY WITH BOTH THE ARRAY VALUES...AS intented 
console.log("new arrays with the concat methods:-", allheros) // resulting array is a single array

//spread method to add two arrays
const all_new_heroes = [...mavel_heros, ...dc_heros]
console.log("new array with the spread method:-", all_new_heroes)

const another_Array = [4, 6, 2, [34, 23, 2, 23,[4, 6, 2, 8, 3, 7,[23]]]]

const another_real_array = another_Array.flat(Infinity) //when the dimensions of the array are not countable or you're lazy just use infinity it will recursively call the flat method on the nested array
console.log(another_real_array) //results into a single array