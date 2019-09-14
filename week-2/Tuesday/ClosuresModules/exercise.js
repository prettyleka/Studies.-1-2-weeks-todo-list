const Bank = (money, depositCash, checkBalance ) =>{
    money = 500

    function depositCash(cash){
        money += cash
         return (money)
    }

    function checkBalance(){
       
        console.log(money)
    }

    
  return {
      deposit: depositCash,
      showBalance: checkBalance
  }
}


const bank = Bank()



bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950