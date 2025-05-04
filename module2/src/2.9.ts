{
    //conditional type

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;   // conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined: any;   // conditional type

    type Sheikh ={
        bike: string;
        car:string;
        ship:string;
    }

    // keyof Sheikh;   bike | car | ship 

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    // car /bike/ship/ tractor ase kina 
    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false

    type HasTractor = CheckVehicle<"tractor">
    type Hasbike = CheckVehicle<"bike">





    //
}