const printOdds = function (numbers) {
    for(let number of numbers) {
      if(!isEven(number)) {
        console.log(number)
      }
    }
}