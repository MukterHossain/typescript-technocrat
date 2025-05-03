{
    // generic constraint with keyof operator
    type Vihicle ={
        bike:string;
        car:string;
        ship:string
    }

    type Owner = 'bike' | 'car' | 'ship'   // manualy
    
    type Owner2 = keyof Vihicle

    // const person1 :Owner = ""

   const  getPropertyValue =<X, Y extends keyof X> (obj:X, key:Y)=>{
        return obj[key]
    }

    const user ={
        name:'Mr Rashed',
        age:26,
        address:'Sonargaon'
    }
    const car ={
        model:'215Ud',
        year: 200
    }

    const result1 = getPropertyValue(user, 'name')
    const result2 = getPropertyValue(car, 'model')








    //
}