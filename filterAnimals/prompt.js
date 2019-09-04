// Given an array of objects (people), return the names of those who are 18 or older.

const people = [
  { name: "", age: 16 },
  { name: "", age: 19 },
  { name: "", age: 20 },
  { name: "", age: 18 }
];

const peopleAbove18 = collection => {
  let names = [];
  collection.filter(person => {
    if (person.age >= 18) {
      names.push(person.name);
    }
  });
  return names;
};

console.log(peopleAbove18(people));
