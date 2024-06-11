console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

/*
comparision ops treat null as a "0", therefore the result will be true in the 3rd console.log with the ops ">="

"===" strict check that checks the value as well as the datatype of the operands, since in the given example the one operand is string and other is number the the statement throw a error
*/
console.log("2" === 2)