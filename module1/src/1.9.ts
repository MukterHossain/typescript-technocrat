{



    // Type Alias
    type Student = {
        name: string;
        age:number;
        gender: string;
        contactNo?:string;
        address: string;
    }


    const student1:Student = {
        name: 'Mukter',
        age: 36,
        gender : 'male',
        contactNo: '19250000000',
        address: 'ctg'
    }
    const student2:Student = {
        name: 'Mir',
        age: 45,
        gender : 'male',
        address: 'Dhk'
    }


    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = 'Mukter'
    const isAdmin : IsAdmin = true

    type Add = (num1: number, num2: number) => number
    const add: Add = (num1, num2) => num1 + num2









}