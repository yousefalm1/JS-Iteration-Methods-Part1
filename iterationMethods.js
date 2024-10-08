const numbers = [10, 13, 20, 25, 38, 35, 40];

// Task 1: Filtering

// 1
const greaterThanTwentyFive = numbers.filter((number) => number >= 25);

console.log(greaterThanTwentyFive);

// 2
const divisibleByFIve = numbers.filter((number) => number % 5 === 0);

console.log(divisibleByFIve);

// Task 2: Mapping

// 3
const eachNumberSquared = numbers.map((number) => number * number);

console.log(eachNumberSquared);
// 4
const eachNumberMultipliedByTwo = numbers.map((number) => number * 2);

console.log(eachNumberMultipliedByTwo);

//  Task 3: Filtering && Mapping

// 5

const numbersGreaterThanOrEqualToTwentyAndThenSquared = numbers
  .filter((number) => number >= 20)
  .map((number) => number * number);

console.log(numbersGreaterThanOrEqualToTwentyAndThenSquared);

// 6

const numbersThatAreDivisibleThenMultipliedByThree = numbers
  .filter((number) => number % 5 === 0)
  .map((number) => number * 3);

console.log(numbersThatAreDivisibleThenMultipliedByThree);

// 🌶️🌶️🌶️ Extra not required

const temperatures = [60, 80, 70, 40, 50];

function logger(temperatures) {
  temperatures.forEach((temp) => console.log(temp));
}

logger(temperatures);

function toCelsius(temperatures) {
  const temperaturesInCelsius = temperatures.map(
    (temp) => (temp - 32) * (5 / 9)
  );
  return temperaturesInCelsius;
}

console.log(toCelsius(temperatures));

function HottestDays(temperatures, threshold) {
  const tempThatExceedThreshold = temperatures.filter(
    (temp) => temp > threshold
  );
  return tempThatExceedThreshold;
}

console.log(HottestDays(temperatures, 70));

function logHottestDays(temperatures, threshold) {
  logger(toCelsius(HottestDays(temperatures, threshold)));
}

logHottestDays(temperatures, 40);
