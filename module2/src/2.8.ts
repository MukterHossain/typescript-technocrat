{
    // promise 

    type Todo ={
        id:number;
        userId:number;
        title:string;
        comleted:boolean;
    }

    const getTodo = async(): Promise<Todo>=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data =await response.json()
        console.log(data)
        return data
    }
    getTodo()







    type Something ={something:string}

    // Promise Object
    const createPromise =():Promise<Something>=>{
        return new Promise<Something>((resolve, reject) =>{
            const data:Something = {something:'somthing'}
            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }
        })
    }

    const showData = async():Promise<Something>=>{
        const data:Something = await createPromise()
        console.log(data)
        return data
    }

    // Promise boolean
    // const createPromise =():Promise<boolean>=>{
    //     return new Promise<boolean>((resolve, reject) =>{
    //         const data:boolean = true
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    // const showData = async():Promise<boolean>=>{
    //     const data:boolean = await createPromise()
    //     console.log(data)
    //     return data
    // }


    // Promise String
    // const createPromise =():Promise<string>=>{
    //     return new Promise<string>((resolve, reject) =>{
    //         const data:string = 'something'
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject('failed to load data')
    //         }
    //     })
    // }

    // const showData = async():Promise<string>=>{
    //     const data:string = await createPromise()
    //     console.log(data)
    //     return data
    // }

    showData()












    //
}