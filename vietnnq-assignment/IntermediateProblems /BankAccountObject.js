class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log('Invalid deposit amount.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }

    getBalance() {
        console.log(`Current balance: ${this.balance}`);
        return this.balance;
    }
}

let account = new BankAccount('123456', 'John Doe', 1000);
account.deposit(500);
account.withdraw(200);
account.getBalance();