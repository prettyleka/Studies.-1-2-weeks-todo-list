//const sum = (a,b,c) =>{console.log(a+b+c)}
//sum(3,6,9)


const capitalize = (str) => {
  let str2 = str[0].toUpperCase(); 
  str3 = str.slice(1); 
  str5 = str3.toLowerCase(); 
  str4 = str2+str5
    console.log(str4)}
capitalize("feliSHIA")


//const determineWeather = temp => {
   // if(temp > 25){
   //   return "hot"
  //  }
 //   return "cold"
 // }

 // const commentOnWeather = temp =>{console.log("it's " + determineWeather(temp))}

//commentOnWeather(30)
//commentOnWeather(22)

//const explode = (lightFunc, soundFunc, sound) => {
    //lightFunc()
    //soundFunc(sound)
//}
//const shineLight = () => document.getElementById("box").style.background = 'yellow'
//const makeSound = (sound) => alert(sound)

//explode(shineLight, makeSound, "BOOM")




const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)