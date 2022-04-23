const getTime = function (func) {
    const time = new Date()
    func(time)
}

const printTime = function (time) {
    console.log('The current time is: ' + time)
}
  
getTime(printTime)