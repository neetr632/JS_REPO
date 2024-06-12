let myDate = new Date()
console.log(myDate) 
console.log(typeof myDate) //type will be of object
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

let mycreatedate = new Date("05-15-2024")
console.log(`this date is created by the user:- ${mycreatedate.toDateString()}`)

let mytimestamp = Date.now()
//console.log(mytimestamp)
//console.log(mycreatedate.getTime())
console.log(Math.floor(Date.now()/1000))

// Create a new Date object
let time = new Date();
// Get the day of the month
let dayOfMonth = time.getDate();
// Log the day of the month
console.log("Day of the month: ", dayOfMonth);

//get the exact year 
let currentyear = time.getFullYear()
//log the exact year
console.log("current year: ", currentyear)

//get the exact current hours
let currenthours = time.getHours()
//log the exact hours
console.log("Current Hours:", currenthours)