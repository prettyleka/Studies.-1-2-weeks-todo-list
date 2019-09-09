
const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
    makeDrink: function(drinkType){      
        let i = coffeeShop.drinkRequirements[drinkType]
        num = coffeeShop.beans - i
        if(i == coffeeShop.drinkRequirements[i]){
            return ("Sorry, we don't make " + drinkType)} 
        else{   
            if(num<5)
                {return "Sorry, we're all out of beans"}
            else
                {return (drinkType +" " + num)}
            
                    
            }}}


            function Count(){
                for(i in wordCounts){
                    if(i = 0, i<=arr.arrStory.length, i++){
                    {if(i==wordCounts[i]){
                        wordCounts[i] + 1
                    }
                    else
                    {wordCounts.push(i)}}
                    
                    }}}
                

              


  console.log(coffeeShop.makeDrink("latte")); 
  console.log(coffeeShop.makeDrink("americano"));
  console.log(coffeeShop.makeDrink("filtered")); //should alert/console "Sorry, we don't make filtered"
  console.log(coffeeShop.makeDrink("doubleShot"));
  console.log(coffeeShop.makeDrink("frenchPress")); //should alert/console "Sorry, we're all out of beans"