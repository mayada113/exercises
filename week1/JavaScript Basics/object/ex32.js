const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

const lowerCaseName = name.toLowerCase()

const editedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)
if (reservations[editedName] && !reservations[editedName].claimed) {
    console.log("Welcome in, " + editedName)
}
else if (reservations[editedName] && reservations[editedName].claimed) {
    console.log("Hmm, someone already claimed this reservation")
}
else if (!reservations[editedName]) {
    console.log("You have no reservation")
}
console.log(reservations)