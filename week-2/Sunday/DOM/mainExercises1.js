var a =document.getElementsByTagName("input")
add.addEventListener('click', function () {
    if(a[0].value == "Bob"){
        alert("Welcome,Bob!")
    }
    else{
        alert("Hmm, someone already claimed this reservation")
}})