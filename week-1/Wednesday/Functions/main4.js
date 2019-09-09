function arrayOfNumbers(numbers){
    for(num in numbers){
        if(num % 2 != 0){
            console.log(num)
            num ++
        }
    }
}
arrayOfNumbers([1,2,3,4,5,6,7])