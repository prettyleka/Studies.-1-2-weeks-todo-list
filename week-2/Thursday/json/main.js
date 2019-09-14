// let recipe = 
// {
//     "name": "Mashed Potatoes",
//     "serves": 4,
//     "calories": 250,
//     "healthy": "true",
//     "ingredients": [
//       {
//         "name": "water"
//       },
//       {
//         "name": "potatoes",
//         "count": 2
//       },
//       {
//         "name": "butter",
//         "count": 2,
//         "unit": "tablespoons"
//       },
//       {
//         "name": "salt",
//         "count": 0.5,
//         "unit": "teaspoon"
//       },
//       {
//         "name": "pepper",
//         "count": 0.25,
//         "unit": "teaspoons"
//       },
//       { 
//         "name": "garlic powder",
//         "count": 2,
//         "unit": "teaspoons"
        
        
//       } 
//     ],
//     "directions": [
//       "Add potatoes to a pot and cover with an inch of water.",
//       "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
//       "Simmer for 20 minutes or until potatoes are fork tender.",
//       "Drain water from potatoes, leaving the potatoes in the original pot.",
//       "Add remaining ingredients to the pot with the potatoes.",
//       "Mash potatoes until they reach the desired consistency.",
//       "Serve immediately, or cover and refrigerate."
//     ]
//   }


// console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
// console.log(recipe.healthy) //should print true
// console.log(recipe.calories) //should print 250
// console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"




let zoo =
{

    "animals":[
{
"name": "cow",
"area": "domestic",
"endangered": "false",
"food": "grass",
"predators": "predators",
"taste": 5,
"weight":[{
    "kilograms": 500,
    "tons": 0.5}]}
,


{"name": "Elephant",
"area": "Africa, Asia",
"endangered": "true",
"food": "leaves, twigs, fruit, bark, grass and roots",
"predators": "predators",
"taste": 5,
"weight":[{
    "kilograms": 700,
    "tons": 0.7}]}
,




{"name": "Gray Wolf",
"area": "Africa, Asia",
"endangered": "true",
"food": "leaves, twigs, fruit, bark, grass and roots",
"predators": "predators",
"taste": 5,
"weight":[{
    "kilograms": 700,
    "tons": 0.7}]},



{"name":"Squirrel",
"area": "Africa, Asia",
"endangered": "true",
"food": "leaves, twigs, fruit, bark, grass and roots",
"predators": "predators",
"taste": 5,
"weight":[{
    "kilograms": 700,
    "tons": 0.7}]}]



}

// let cowW = console.log(zoo.animals[0].weight[0].kilograms)
// let eleW = console.log(zoo.animals[1].weight[0].kilograms)
// let wolfW = console.log(zoo.animals[2].weight[0].kilograms)
// let squiW = console.log(zoo.animals[3].weight[0].kilograms)

let kilos = console.log(zoo.animals[0].weight[0].kilograms + zoo.animals[1].weight[0].kilograms +zoo.animals[2].weight[0].kilograms +zoo.animals[3].weight[0].kilograms)
 console.log(50/2.600)
 console.log(70/2.600)
// console.log(zoo.animals[0].weight) + zoo.animals[1].weight + zoo.animals[2].weight + zoo.animals[3].weight)