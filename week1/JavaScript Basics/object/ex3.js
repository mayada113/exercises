const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

if (reservations[name] && !reservations[name].claimed) {
  console.log("Welcome in, " + name)
} 
else if (reservations[name] && reservations[name].claimed) {
  console.log("Hmm, someone already claimed this reservation")
} 
else if (!reservations[name]) {
  console.log("You have no reservation")
  reservations[name] = { claimed: true } //ex3.1
}
console.log(reservations)
