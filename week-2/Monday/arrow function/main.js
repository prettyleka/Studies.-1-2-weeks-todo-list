const suspenseBuilder = {
    name: "El Mysterio",
    displayName: function () {

        console.log("You are going to see the name in 3 seconds...")

        setTimeout(() => { console.log("The name is: " + this.name)
        }, 3000)

    }
}

suspenseBuilder.displayName()