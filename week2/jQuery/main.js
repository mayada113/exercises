const header = $("h1")
console.log(header)

const myQuery = function (selector) {
    if (selector[0] == "#") {
        const elementId = selector.split("#")[1] //will return everything after the # in selector 
        return document.getElementById(elementId)
    }
}