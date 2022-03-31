// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => brands.reduce((a, b) => [...a, ...b.shoes], []);
// export const getSneaks = (brands) => brands.map((brand) => brand.shoes).flat();

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
// export const getAverageAge = (dogs) =>
//   dogs.map((dog) => dog.age).reduce((a, b) => a + b, 0) / dogs.length;

export const getAverageAge = (dogs) => dogs.reduce((a, b) => a + b.age, 0) / dogs.length;
