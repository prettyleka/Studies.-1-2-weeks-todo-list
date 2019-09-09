p1 = {
    name: "Jill",
    age: 27,
    city: "California"
}

p2 = {
    name:"Robert",
    age: 27,
    city: "Malmo"
}

if( p1.age === p2.age){
    console.log("They are the same age")
}
else{
    console.log("They are not the same age")
}

if(p1.city===p2.city){
    console.log(p1.name + " whanted to date " + p2.name)
}
else{
    console.log(p1.name + " whanted to date " + p2.name + ", " + "but couldnt")
}