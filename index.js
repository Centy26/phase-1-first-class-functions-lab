// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Function that returns the first two drivers from an array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function that returns the last two drivers from an array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing the two driver-selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that creates a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Function that doubles a fare
const fareDoubler = createFareMultiplier(2);

// Function that triples a fare
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on the passed function
function selectDifferentDrivers(drivers, selectionFunction) {
  return selectionFunction(drivers);
}


console.log(returnFirstTwoDrivers(drivers)); 
console.log(returnLastTwoDrivers(drivers));  

const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5)); 

console.log(fareDoubler(10));  
console.log(fareTripler(12));  

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));  
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
