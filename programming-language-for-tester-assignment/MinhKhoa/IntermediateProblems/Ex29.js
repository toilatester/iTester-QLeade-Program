class BankAccount {
    constructor(accountNumber, accountHolderName, balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(depositAmount){
        this.balance = this.balance + depositAmount;
    }

    withdraw(withdrawAmount){
        this.balance = this.balance - withdrawAmount;
    }

    getBalance(){
        return this.balance;
    }
}

const prompt = require("prompt-sync")();
let balance = parseInt(prompt("Enter balance: "));
let depositAmount = parseInt(prompt("Enter deposit amount: "));
let withdrawAmount = parseInt(prompt("Enter withdraw amount: "));
let account = new BankAccount('123456', 'John Doe', balance);
account.deposit(depositAmount);
account.withdraw(withdrawAmount);
account.getBalance();
console.log(account);