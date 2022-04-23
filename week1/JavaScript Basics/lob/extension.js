const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const dictKeys = Object.keys(dictionary)
let newArr = []

for (let dictKey of dictKeys) {
  newArr = dictionary[dictKey]
  console.log("Words that begin with " + dictKey + ":")
  for (let word of newArr) {
    console.log("\t" + word)
  }
}