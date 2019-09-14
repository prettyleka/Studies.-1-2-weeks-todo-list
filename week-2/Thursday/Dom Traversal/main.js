// $("button").click(function(){
//     alert($(this).closest("div").find("span").text())
//   })


// $("button").click(function(){
//     alert($('.container').find("p").text())

$(".generator").click(function(){
    alert("Processor ID: " + $("div").attr("id") + " {cmp_id: " + $(this).closest(".computer").data().id  +"}" + " BUS number: " + $(this).closest(".computer").find(".BUS").text()
)})
$(".validator").click(function(){
    alert("generator's text: "+ $(this).closest(".computer").find(".generator").text() + " MB: " + $(this).closest(".computer").find(".MB").text() + " QRs: " + $(this).closest(".computer").find(".QR").text())
})

