"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
        getHiddenMethod() {
            return this.getBalance();
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.
            ;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    goribManusherAccount.
    ;
    //
}
