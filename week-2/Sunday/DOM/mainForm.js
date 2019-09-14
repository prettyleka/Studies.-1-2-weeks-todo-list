submit.addEventListener('click', function() {
const a = document.getElementById("name").value
const b = document.getElementById("phone").value
const d = document.getElementById("birthdate").value
const c = document.getElementById("salary").value

    if(a.length <= 2){
        alert("wrong name")}
    if(с.innerText <= 10000 || c.innerText >= 16000){
        alert("wrong salary")}
    if(d == null){
        alert("wrong bd")}
    if(b.length != 10){
        alert("wrong phone")}       

    
    
    
    
})
