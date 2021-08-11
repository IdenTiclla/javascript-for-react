const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
];

const getAges = (person) => person.age * 1
const ages = people.map(getAges)
console.log(ages)

const ages2 = people.map((person)=>(person.age))
console.log(ages2)

const newPeople = people.map((person) => {
    return {
        FirstName: person.name.toUpperCase(),
        age: person.age * 2,
        position: person.position[0].toUpperCase() + person.position.slice(1)
    }
})

console.log(newPeople)


const names = people.map((person) => `<h2>${person.name}</h2>`)
const result = document.querySelector('#result')
result.innerHTML = names.join('')