{
    // abstraction   >  1. interface  2. abstract 

    // idea
    interface Vehicle1 {
        startEngine():void;
        stopEngine(): void;
        move():void;
    }

    // real inplementation
    class Car1 implements Vehicle1{
        startEngine():void{
            console.log(`I am starting the car engine`)
        }
        stopEngine():void{
            console.log(`I am Stop the car engine`)
        }
        move():void{
            console.log(`I am moving the car `)
        }
        test():void{
            console.log(`I am test the car `)
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine()



   abstract class  Car2{
       abstract startEngine():void
       abstract stopEngine():void
       abstract move():void
        test():void{
            console.log(`I am test the car `)
        }
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
          console.log('I am starting the car engine')  
        }
        stopEngine(): void {
          console.log('I am stop the car engine')  
        }
        move(): void {
          console.log('I am move the car engine')  
        }
    }

    const hondaCar = new Car2()






    //
}