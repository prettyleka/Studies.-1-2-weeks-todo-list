const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };



const logData = function(Data){
    console.log(Data)}
  
  displayData(alert, logData, "I like to party")