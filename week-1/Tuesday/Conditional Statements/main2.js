let performance = prompt("Does your performance is stellar or just good? ")
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance == "stellar"){
    console.log(salary + stellarBonus)
}
else{
    console.log(salary+goodBonus)
}