class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} success`);
        } else {
            console.log('Invalid amount. Deposite failed');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from the account.`);
        } else {
            console.log('Invalid amount or insufficient funds. Cannot withdraw ');
        }
    }

    getBalance() {
        console.log('Balance:', this.balance);
        return this.balance;
    }
}

let account = new BankAccount('123456', 'John Doe', 1000);
account.getBalance();
account.deposit(500);
account.withdraw(200);
account.getBalance();
