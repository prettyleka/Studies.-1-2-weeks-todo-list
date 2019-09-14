const formatter = () => {

    const capitalizeFirst = (str) =>{
        var1 = str[0].toUpperCase()
        var2 = str.slice(1)
        var3 = var2.toLowerCase()
        var4 = var1 +var3
        return (var4)
    }
    

    const skewerCase = (str) => {
    return (str.replace(" ", "-"))
    }
return {capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase}
}

const f = formatter()
console.log(f.capitalizeFirst("dorothy")) //should print Dorothy
console.log(f.skewerCase("blue box")) //should print blue-box
