const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], age: ages[i] })
}
console.log(people)
//ex2
for (let i in people) {
    console.log(people[i].name + " is " + people[i].age + " years old")
}