class BankAccount{
    constructor(accountNumber,accountHolderName,balance){
        this.accountNumber=accountNumber
        this.accountHolderName=accountHolderName
        this.balance=balance
    }

    deposit(amount){
        this.balance=this.balance+amount
    }

    withdraw(amount){
        this.balance=this.balance-amount
    }

    getBalance(){
        console.log(this.balance)
    }
}

let account = new BankAccount('123456', 'John Doe', 1000)
account.deposit(500)
account.withdraw(200)
account.getBalance()

