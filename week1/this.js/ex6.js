const coffeeShop = {
    beans: 40,


    money: 15,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 10 },
        americano: { beanRequirement: 5, price: 5 },
        doubleShot: { beanRequirement: 15, price: 15 },
        frenchPress: { beanRequirement: 12, price: 12 }
    },


    buyBeans: function (numBeans) {
        this.beans += numBeans
        this.money -= numBeans * 0.5

    },


    hasDrink: function (drinkType) {
        let drinks = Object.keys(this.drinkRequirements)
        for (let drink of drinks) {
            if (drink === drinkType) {
                return true
            }
        }
        return false
    },


    hasEnoughBeans: function (drinkType) {
        if (this.beans > this.drinkRequirements[drinkType].beanRequirement) {
            return true
        } else {
            return false
        }
    },


    useBeans: function (drinkType) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement
    },

    makeDrink: function (drinkType) {
        if (!this.hasDrink(drinkType)) {
            alert("Sorry, we don't make " + drinkType)
        } else if (!this.hasEnoughBeans(drinkType)) {
            alert("Sorry we're all out of beans!")
        } else {
            this.useBeans(drinkType)
        }
    },


    buyDrink: function (drinkType) {
        if (this.hasDrink(drinkType)) {
            this.money += this.drinkRequirements[drinkType].price
            this.makeDrink(drinkType)
        } else {
            console.log("Sorry, we don't make " + drinkType)
        }
    }
}