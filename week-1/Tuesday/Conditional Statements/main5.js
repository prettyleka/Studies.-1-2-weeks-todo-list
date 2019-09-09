let boughtTesla = false;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = false;
let currentYear = 2019;
if(boughtTesla == true && (currentYear - yearOfTeslaPurchase > 4)){
    if(isUSCitizen == true){
        console.log("Do you want to upgreate?");
    }
    else if(isUSCitizen == false){
        console.log("would like to move to the US?");
    }
}

else if(boughtTesla == true && (currentYear - yearOfTeslaPurchase <= 4) && isUSCitizen == true){
    console.log("are you saticfied?");
}
else if(boughtTesla == false){
    console.log("Are you interested in buying one?");
}
