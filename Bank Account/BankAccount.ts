class Transactions {
    date = new Date();
    dd = String(this.date.getDate()).padStart(2, '0');
    mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = this.date.getFullYear();
    transactionDate = this.yyyy + '/' + this.mm + '/' + this.dd;
    transaction: [string, string, number][] = [];
    addTransactions(transactionDate: string, action: string, amount: number) {
        this.transaction.push([transactionDate, action, amount]);
    }
    transactionHistory(): void {
        for (let i = 0; i < this.transaction.length; i++) {

            console.log(`Date: ${this.transaction[i][0]}; Type: ${this.transaction[i][1]}; Amount: ${this.transaction[i][2]};`);
        }
    }
}

class Account extends Transactions {
    public customerName: string;
    accountNo: number;
    accountType: string;

    public getAccount(name: string, accNo: number, type: string) {
        this.customerName = name;
        this.accountNo = accNo;
        this.accountType = type;
    }

    public displayDetails() {
        console.log(`Customer Name: ${this.customerName}`);
        console.log(`Customer Account: ${this.accountNo}`);
        console.log(`Account Type: ${this.accountType}`);
    }
}

class CurrentAccount extends Account {
    public balance: number = 2000;
    public displayBalance(): void {
        console.log(`Balance: ${this.balance}`);
    }

    public depositCurrent(deposit: number): void {
        this.balance = this.balance + deposit;
        console.log(`Updated Balance: ${this.balance}`);
        this.addTransactions(this.transactionDate, "Deposit", deposit);
    }

    public withdraw(withdrawAmount: number) {
        let withdraw: number = withdrawAmount;
        let penatly: number;
        console.log(`Balance: ${this.balance}`);
        this.balance = this.balance - withdrawAmount;
        if (this.balance < 500) {
            penatly = (500 - this.balance) / 10;
            this.balance = this.balance - penatly;
            console.log(`Balance after deducting penalty amount: ${this.balance}`);
            this.addTransactions(this.transactionDate, "Withdraw", withdrawAmount);

        }

        else if (this.balance < withdrawAmount) {
            console.log("You cannot withdraw amount, Please make use of overdraft facility");
        }

        else {
            console.log(`Amount Balance after withdraw: ${this.balance}`);
            this.addTransactions(this.transactionDate, "Withdraw", withdrawAmount);
        }
    }

}

class SavingAccount extends Account {
    public savingBalance: number = 5000;
    public displayBalance(): void {
        console.log(`Balance is ${this.savingBalance}`);
    }

    public depositSaving(deposit: number): void {
        let interest: number;
        this.savingBalance = this.savingBalance + deposit;
        interest = (this.savingBalance * 2) / 100;
        this.savingBalance = this.savingBalance + interest;
        console.log(`Updated Balance${this.savingBalance}`);


    }

    public withdrawSaving(withdrawAmount: number) {
        let penatly: number;
        console.log(`Balance ${this.savingBalance}`);
        this.savingBalance = this.savingBalance - withdrawAmount;
        if (this.savingBalance < 800) {
            penatly = (500 - this.savingBalance) / 10;
            this.savingBalance = this.savingBalance - penatly;
            console.log(`Balance after deducting penalty amount is ${this.savingBalance}`);

        }

        else if (this.savingBalance < withdrawAmount) {
            console.log("You cannot withdraw amount,Please make use of overdraft facility");
        }

        else {
            console.log(`Amount Balance after withdraw ${this.savingBalance}`);
        }
    }

}




let account = new Account();
let current = new CurrentAccount();
account.getAccount('Modestas', 12345, 'Current');
account.displayDetails();
current.depositCurrent(400);
current.withdraw(300);
current.depositCurrent(300);
current.withdraw(400);
current.depositCurrent(500);
current.withdraw(500);
current.transactionHistory();