const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const checkReservation = function () {
    const name = document.getElementById("name").value
    const lowerCaseName = name.toLowerCase()
    const editedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)
    if (reservations[editedName] && !reservations[editedName].claimed) {
        console.log("Welcome in, " + editedName)
        reservations[editedName].claimed = true
    }
    else if (reservations[editedName] && reservations[editedName].claimed) {
        console.log("Hmm, someone already claimed this reservation")
    }
    else if (!reservations[editedName]) {
        console.log("You have no reservation")
        reservations[editedName] = { claimed: true }
    }
}

