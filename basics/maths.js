console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4,4.3,4.6))
console.log(Math.max(4,4.3,4.6))

//math.random  only genereates floating value of 0 to 1 mutliple and add custom values to create your suitable range

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

//random values under a particular range

const max = 10
const min = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min)