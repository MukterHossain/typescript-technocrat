{
    // utility types
    // Pick
    type Person ={
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>
    // type Name = Pick<Person, 'name'>



    // Omit
    type ContactInfo = Omit<Person, 'name' | 'age'>


    // Required 
    type PersonRequired = Required<Person>


    // Partial
    type PersonPartial = Partial<Person>

    //Readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly ={
        name:'Mr. Xy',
        age:25,
    contactNo: '12224'
    }
    // const person1: Person ={
    //     name:'Mr. Xy',
    //     age:25,
    // contactNo: '12224'
    // }
    person1.name = 'Mr Hiaddsfn'


    // Record 
    type MyObj = Record<string, string>

    const EmptyObj : Record<string, unknown> = {}
    // type MyObj ={
    //     a: string;
    //     b:string;
    // }
    const obj1 : MyObj ={
        a: 'aa',
        b:'bb',
        c: 'cc'
    }








    //
}