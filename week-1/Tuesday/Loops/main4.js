
const names = [
    "Ashley", 
    "Donovan", 
    "Lucas"
];
const ages = [
     23, 
     47, 
     18
];
const people = [];
for(let i = 0; i<names.length; i++){
    for(let j=0; j<ages.length; j++){
        people.push(names[i] + ":" + ages[j]) 
        console.log(people) 
    }    
}