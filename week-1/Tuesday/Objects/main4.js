const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 2 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 2 }
        ]
    }
}
let daysOff = kitchen.fridge.items[0].expiryDate - date
let payFridge = kitchen.fridge.price/2

if(kitchen.hasOven == true){
    if(kitchen.fridge.works == true){
        console.log("Geraldine's raddish expired " +daysOff + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish")}
    else{
        console.log("Geraldine's raddish expired " + daysOff+"." + " Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay " + payFridge+" to fix the fridge")
    }
}
if(kitchen.hasOven == false){
    if(kitchen.fridge.works == true){
        console.log("Geraldine's raddish expired " +daysOff + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish")}
    
    if(kitchen.fridge.works == false){
        console.log("Geraldine's raddish expired " + daysOff+"." + " Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay " + payFridge+" to fix the fridge")}

}
