{
    // oop - inheritence


    class Parent{
        name:string;
        age:number;
        address:string;
        constructor(name:string, age:number, address:string){
            this.name=name;
            this.age=age;
            this.address = address
        }
        getSleep(numOfHours:number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }




    class Student extends Parent{
     
        constructor(name:string, age:number, address:string){
            super(name, age, address)
        }
    }
    // class Student{
    //     name:string;
    //     age:number;
    //     address:string;
    //     constructor(name:string, age:number, address:string){
    //         this.name=name;
    //         this.age=age;
    //         this.address = address
    //     }
    //     getSleep(numOfHours:number){
    //         console.log(`${this.name} will sleep for ${numOfHours}`)
    //     }
    // }


    const student1 = new Student('Mr Tohin', 25, 'Sonargaon')
    student1
        
    class Teacher extends Parent{
        designation:string;
        constructor(name:string, age:number, address:string, designation:string){
            super(name, age, address)
            // this.name=name;
            // this.age=age;
            // this.address = address;
            this.designation = designation
        }
        takeClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher = new Teacher('Mr Kobir', 45, 'Sonargaon', 'professor')
    teacher










    //
}