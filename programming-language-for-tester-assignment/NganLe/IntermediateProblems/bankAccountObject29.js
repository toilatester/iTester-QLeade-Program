/**
 * 29.  **Bank Account Object**
   - Problem: Create a `BankAccount` class that has properties for `accountNumber`, `accountHolderName`, and `balance`. Include methods for `deposit(amount)`, `withdraw(amount)`, and `getBalance()`.
   - Example Input: `let account = new BankAccount('123456', 'John Doe', 1000), account.deposit(500), account.withdraw(200), account.getBalance()`
   - Example Output: `1300`
   - Explanation: The account starts with a balance of 1000. After depositing 500 and withdrawing 200, the balance is 1300.
 */
class BankAccount{
  constructor(accountNumber, accountHolderName, balance){
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount){
    if(amount > 0){
      this.balance += amount;
    }
    else console.log('Invalid amount')
  }
  withdraw(amount){
    if(amount > 0 && this.balance > amount){
      this.balance -= amount;
    }
    else console.log('invalid amount/balance is not enough')
  }
  getBalance(){
    console.log(this.balance);
  }
}
let account = new BankAccount('123456', 'John Doe', 1000);
account.deposit(500);
account.withdraw(200);
account.getBalance();