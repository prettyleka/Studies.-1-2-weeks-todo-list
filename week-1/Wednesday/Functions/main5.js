function CheckExist(integrs, number){
    for(let i = 0; i<=integrs.length; i++){
        if(i==number){
            console.log(true)
            }
        if(i != number){
            console.log(false)
        }
    }
}

CheckExist([1,2,3,4], 7)