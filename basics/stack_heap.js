/*

Stack Memory:

Stores: Primitive data types like numbers, strings, booleans, null, and undefined.

Allocation: Fixed size allocated at compile time (or when the function is created).

Value Storage: Actual values are stored in the stack.

Changes: When a primitive value is passed to a function or assigned to another variable, the value itself is copied. Modifying the copy doesn't affect the original value.

Heap Memory:

Stores: Objects (including arrays and functions) and references to them.

Allocation: Dynamically allocated as needed during runtime.

Value Storage: References (memory addresses) to the actual object's location in the heap are stored in the stack. The object itself resides in the heap.

Changes: When you modify an object property, the change happens to the original object in the heap since you're working with the reference. This affects the source value.*/

let myname = "jack"
let newname = myname
newname = "colin powell"
console.log(newname)

let user_1 = {
    name : "alice",
    email: "examil@example.com"
}

let user_2 = user_1

user_2.email = "newemail@example.com"

console.log(user_1.email)
console.log(user_2.email)