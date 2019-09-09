let names = ["a", "b", "c"]
let ages = [1,2,3]
for(let i = 0; i<names.length; i++){
    for(let j=0; j<ages.length; j++){
console.log(names[i]+ " is "+ ages[j]+ " years old")
}
}


const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let i = 0; i<names.length; i++){
    for(let j=0; j<ages.length; j++){
        people.push(names[i].concat(ages[i]))
        console.log(people)
    }
}