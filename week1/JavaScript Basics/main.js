console.log("Hello, world!")
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
console.log(companies.splice(1, 1))
for(let companyIndex in companies){
    console.log(companies[companyIndex])
}
for(let company of companies){
    console.log(company)
}

let x = [ {human: {name: 'Daena', age: 31} } ][0].age

const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]

if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}

console.log(bag)
console.log("Added " + nextItem)