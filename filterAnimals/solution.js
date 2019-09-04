// Return the names of anyone who is 18 years of age or older using the filter higher order function

const animals = [
  { name: "Natasha", age: 10 },
  { name: "Raina", age: 1 },
  { name: "Rocky", age: 13 },
  { name: "Bullwinkle", age: 13 },
  { name: "Mya", age: 4 },
  { name: "Celeste", age: 1 }
];

const animalsOlderThanFive = collection => {
  let names = [];
  collection.filter(animal => {
    if (animal.age > 5) {
      names.push(animal.name);
    }
  });
  return names;
};
