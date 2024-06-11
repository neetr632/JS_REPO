// Declare a constant variable named 'name' and assign the string "hitesh" to it
const name = "hitesh";

// Declare a constant variable named 'repocount' and assign the number 50 to it
const repocount = 50;

// Use template literals (backticks) for string formatting, similar to f-strings in Python
console.log(`Hello, you have ${repocount} repositories and your name is ${name}`);

// Create a String object named 'gameName' with the value "hiteshinc" (using String constructor is generally not recommended)
const gameName = new String('hiteshinc');

// Access the character at index 6 of the 'gameName' string and print it (h)
console.log(gameName[6]);

// Print the prototype of the 'gameName' object (shows methods and properties inherited from String)
console.log(gameName.__proto__);

// Print the length of the 'gameName' string (8)
console.log(gameName.length);

// Convert 'gameName' to uppercase and print it (HITESHINC)
console.log(gameName.toUpperCase());

// Access the character at index 1 of the 'gameName' string and print it (i)
console.log(gameName.charAt(1));

// Find the index of the first occurrence of 'e' in 'gameName' and print it (3)
console.log(gameName.indexOf('e'));

// **Note:** There is no built-in `bold()` method for console output in JavaScript.

// Extract a substring from 'gameName' starting at index 0 (inclusive) to index 6 (exclusive) and print it (hitesh)
const newString = gameName.substring(0, 6);
console.log(newString);

// Create a bold-formatted string using template literals and HTML (won't display bold in console)
const boldGamename = `<b>${gameName}</b>`;
console.log(boldGamename); 

// Create a string with leading and trailing spaces
const newstringone = `  hiteshmani  `;
console.log(newstringone);

// Remove leading and trailing whitespaces from 'newstringone' and print it (hiteshmani)
console.log("trimmed white spaces removed from the string:- "+newstringone.trim());

// Create a URL string
const url = "https://www.example.com-product-category-description";

// Replace the first occurrence of "//" with "-" in the URL and print it (works for this specific case, but might not be robust for all URLs)
console.log("use of replace:- "+url.replace('//', '-'));

// Check if 'url' includes the substring "cat" and print the result (true)
console.log("boolean value:- "+url.includes('cat'));

// Split the 'url' string at each hyphen (-) and print the resulting array 
// (might not be ideal for complex URLs, consider using URL object)
console.log(url.split('-'));
