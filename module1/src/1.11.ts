{

    // ternary operator || optional chaining || nullish coalescing operator

    const age:number = 25
    if(age>= 18){
        // console.log('Adult')
    }else{
        // console.log('not adult')
    }

    const isAdult = age >= 18 ? 'Adult' : 'not adult'
    // console.log(isAdult)
    // console.log({isAdult})

    // nullish coalescing operator
    // null / undefined --> decision making
    const isAuthenticated = null // undefined
    
    const result1 = isAuthenticated ?? "Guest"
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    console.log({result1}, {result2})

type User = {
    name:string;
    address:{
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?:string;
    }
}

const user: User ={
    name:'Mukter',
    address: {
        city: 'Dhaka',
        road: 'Panam',
        presentAddress: 'Sonargaon',
        // permanentAddress: 'Sonargaon'
    }
}
const permanentAddress = user?.address?.permanentAddress ?? 'No permanentAddress found'
console.log({permanentAddress})



}