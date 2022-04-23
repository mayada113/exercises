const myObject = {
    [Symbol.iterator]: function () {
        const array = [11, 13, 14, 66, 67, 69, 234, 456, 2, 1]
        let index = 0;
        return {
            next: () => {
                if (index < array.length - 1) {
                    return { value: array[index++], done: false }
                }
                else {
                    return { done: true }
                }
            }
        };
    }

}

for (let x of myObject) {
    if (x % 2 == 0) {
        console.log(x)
    }
}


