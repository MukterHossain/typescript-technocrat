{
    // generic type

    type GenericArray<T> = Array<T>
    // const rollNumbers :number[] = [5, 3, 5]
    const rollNumbers :GenericArray<number> = [5, 3, 5]

    // const mentors: string[]= ['Md x', 'mukter', 'hossain']
    const mentors: GenericArray<string>= ['Md x', 'mukter', 'hossain']

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericArray<boolean>= [true, false, true]

    // generic of interface
    type User ={
        name:string,
        age:number
    }

    const user : GenericArray<User> =[
        {name: 'Mukter', age:30},
        {name: 'Hossain', age:23},
    ]
    // const user : GenericArray<{name:string, age:number}> =[
    //     {name: 'Mukter', age:30},
    //     {name: 'Hossain', age:23},
    // ]


    const add=(x:number, y:number) => x+y


    add(30,20)

    // Generic tuple
    type GenericTuple<x,y> = [x, y]

    const manush: GenericTuple<string, string> = ['Mr X', 'Mr Y']

    const UserWithID: GenericTuple<number, {name:string, email:string}> = [123, {name: 'Mukter', email:"a@gmail.com"}]











    // 
}