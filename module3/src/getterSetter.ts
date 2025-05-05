{
    // gatter and setter
    class BankAccount {
        public readonly id:number;
       public name:string;
       protected _balance: number;

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount:number){
            this._balance = this._balance + amount
        }
    //   public  addDeposit(amount:number){
    //         this._balance = this._balance + amount
    //     }

    // getter
    get balance(){
        return this._balance
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


    const result1 = new BankAccount(111, 'Mr. X', 200)
    //     result1.balance = 0
    // result1.addDeposit(2500) // function call korte hosse
    result1.deposit = 200
    // const myBalance = result1.getBalance()  // function call korte hosse

    const myBalance = result1.balance
    console.log(myBalance)










    //
}