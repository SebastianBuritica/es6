// USE OF FOREACH TO LOOP THROUGH AN ARRAY

const dogs = ['pitbull', 'dalmatian', 'husky', 'doberman', 'pug']

dogs.forEach((dog) => {
    console.log('Part1  ' + dog)
})



// CREATE AN ARRAY OF NUMBERS 
const numbers = [1, 2, 3, 4, 2, 6]

// CREATE A VARIABLE TO HOLD THE SUM 

let sum = 0

// LOOP OVER THE ARRAY, INCREMENTING THE SUM VARIABLE
numbers.forEach((number) =>{
    sum += number
})

// PRINT THE SUM VARIABLE
console.log('Part2  ' + sum)



// The array below contains an array of objects, each of which is a representation of an image.  
// Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  
// The area of an image can be calculated as 'image.height * image.width'.

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = [];

images.forEach((image) => {
  let areaCalc = image.width * image.height;
  areas.push(areaCalc);
});

console.log('Part3  ' + areas);
