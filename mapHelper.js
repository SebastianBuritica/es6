var numbers = [1, 2, 3];
var doubledNumbers = [];

numbers.forEach((number) => doubledNumbers.push(number * 2));
// console.log(doubledNumbers, "forEach");

// Now with map
var doubledNumbersMap = numbers.map((number) => number * 2);
// console.log(doubledNumbersMap, "Map 1");

// Another example
// A pluck
var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "EXPENSIVE" },
];

var prices = cars.map((car) => car.price);

// console.log(prices, "Pluck");

// Excercise
var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" },
];

var heights = images.map((height) => height.height);

// console.log(heights);

// Excercise

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

var speeds = trips.map((speed) => speed.distance / speed.time);
// console.log(speeds);

// Hard plucking excercise
function pluck(array, property) {
  return array.map((item) => {
    return item[property];
  });
}

var dogs = [
  { race: "Pitbull", cuteness: 1000 },
  { race: "Border Collie", cuteness: 600 },
];

var result = pluck(dogs, "race");
console.log(result)