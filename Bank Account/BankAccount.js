var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transactions = /** @class */ (function () {
    function Transactions() {
        this.date = new Date();
        this.dd = String(this.date.getDate()).padStart(2, '0');
        this.mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
        this.yyyy = this.date.getFullYear();
        this.transactionDate = this.yyyy + '/' + this.mm + '/' + this.dd;
        this.transaction = [];
    }
    Transactions.prototype.addTransactions = function (transactionDate, action, amount) {
        this.transaction.push([transactionDate, action, amount]);
    };
    Transactions.prototype.transactionHistory = function () {
        for (var i = 0; i < this.transaction.length; i++) {
            console.log("Date: " + this.transaction[i][0] + "; Type: " + this.transaction[i][1] + "; Amount: " + this.transaction[i][2] + ";");
        }
    };
    return Transactions;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account.prototype.getAccount = function (name, accNo, type) {
        this.customerName = name;
        this.accountNo = accNo;
        this.accountType = type;
    };
    Account.prototype.displayDetails = function () {
        console.log("Customer Name: " + this.customerName);
        console.log("Customer Account: " + this.accountNo);
        console.log("Account Type: " + this.accountType);
    };
    return Account;
}(Transactions));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 2000;
        return _this;
    }
    CurrentAccount.prototype.displayBalance = function () {
        console.log("Balance: " + this.balance);
    };
    CurrentAccount.prototype.depositCurrent = function (deposit) {
        this.balance = this.balance + deposit;
        console.log("Updated Balance: " + this.balance);
        this.addTransactions(this.transactionDate, "Deposit", deposit);
    };
    CurrentAccount.prototype.withdraw = function (withdrawAmount) {
        var withdraw = withdrawAmount;
        var penatly;
        console.log("Balance: " + this.balance);
        this.balance = this.balance - withdrawAmount;
        if (this.balance < 500) {
            penatly = (500 - this.balance) / 10;
            this.balance = this.balance - penatly;
            console.log("Balance after deducting penalty amount: " + this.balance);
            this.addTransactions(this.transactionDate, "Withdraw", withdrawAmount);
        }
        else if (this.balance < withdrawAmount) {
            console.log("You cannot withdraw amount, Please make use of overdraft facility");
        }
        else {
            console.log("Amount Balance after withdraw: " + this.balance);
            this.addTransactions(this.transactionDate, "Withdraw", withdrawAmount);
        }
    };
    return CurrentAccount;
}(Account));
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.savingBalance = 5000;
        return _this;
    }
    SavingAccount.prototype.displayBalance = function () {
        console.log("Balance is " + this.savingBalance);
    };
    SavingAccount.prototype.depositSaving = function (deposit) {
        var interest;
        this.savingBalance = this.savingBalance + deposit;
        interest = (this.savingBalance * 2) / 100;
        this.savingBalance = this.savingBalance + interest;
        console.log("Updated Balance" + this.savingBalance);
    };
    SavingAccount.prototype.withdrawSaving = function (withdrawAmount) {
        var penatly;
        console.log("Balance " + this.savingBalance);
        this.savingBalance = this.savingBalance - withdrawAmount;
        if (this.savingBalance < 800) {
            penatly = (500 - this.savingBalance) / 10;
            this.savingBalance = this.savingBalance - penatly;
            console.log("Balance after deducting penalty amount is " + this.savingBalance);
        }
        else if (this.savingBalance < withdrawAmount) {
            console.log("You cannot withdraw amount,Please make use of overdraft facility");
        }
        else {
            console.log("Amount Balance after withdraw " + this.savingBalance);
        }
    };
    return SavingAccount;
}(Account));
var account = new Account();
var current = new CurrentAccount();
account.getAccount('Modestas', 12345, 'Current');
account.displayDetails();
current.depositCurrent(400);
current.withdraw(300);
current.depositCurrent(300);
current.withdraw(400);
current.depositCurrent(500);
current.withdraw(500);
current.transactionHistory();
