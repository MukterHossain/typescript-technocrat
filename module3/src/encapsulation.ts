{
    //access modifiers
    class BankAccount {
        public readonly id:number;
       public name:string;
       protected _balance: number;

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
      public  addDeposit(amount:number){
            this._balance = this._balance + amount
        }
      private  getBalance(){
            return this._balance
        }
        getHiddenMethod(){
            return this.getBalance()
        }
    //   public  getBalance(){
    //         return this._balance
    //     }
    }

    class StudentAccount extends BankAccount{
        test(){
            this
        }
    }


    const result1 = new BankAccount(111, 'Mr. X', 20)

    result1.addDeposit(2500)
    const myBalance = result1.getBalance()
    console.log(myBalance)










    //
}