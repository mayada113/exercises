let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if(boughtTesla && isUSCitizen){
    if(currentYear-yearOfTeslaPurchase>=4){
        console.log(" would you like an upgrade?")
    }
    else{
        console.log("are you satisfied with the car?")
    }
}
else if(boughtTesla&& !isUSCitizen){
    console.log("would you like to move to the US?")

}
if(!boughtTesla){
    console.log("Are you interested in buying Tesla?")
}