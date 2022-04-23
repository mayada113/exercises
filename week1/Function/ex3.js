const checkExists = function (numArray, number) {
    for (let i in numArray) {
        if (numArray[i] === number) {
            return true;
        }
    }
    return false
}