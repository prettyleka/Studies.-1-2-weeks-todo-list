function increaseByNameLength(mon, nam){
    return (mon * nam.length)
};

function makeRegal(num){
    return "His Royal Highness, " +num
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) 