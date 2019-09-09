const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    Max: { claimed: true}
  }

  const name = prompt('Please enter the name for your reservation');
  const lowName = name.toLowerCase
  

if(Object.keys(reservations)[0].toLowerCase == lowName && reservations.Bob.claimed == false){
    console.log("Welcome, Bob")
}
else if(Object.keys(reservations)[1].toLowerCase==lowName && reservations.Ted.claimed == true){
    console.log("Hmm, someone already claimed this reservation")
}
else if(Object.keys(reservations)[2].toLowerCase==lowName && reservations.Max.claimed == true){
    console.log("Hmm, someone already claimed this reservation")
}
else {
    console.log("You have no reservation")
}
