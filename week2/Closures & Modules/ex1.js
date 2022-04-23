const StringFormatter = function () {
    
    const capitalizeFirst = function (str) {
        let newStr = str[0].toUpperCase()
        newStr += str.slice(1).toLowerCase()

        return newStr
    }

    const skewerCase = function (str) {
        let newStr = str.replace(/ /g, "-")
        return newStr
    }

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy"))
console.log(formatter.skewerCase("blue box"))