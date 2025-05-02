{

    // nulable types  / unknown types

    const serchName = (value: string |null )=>{
        if(value){
            console.log("Searching")
        }else{
            console.log('there is nothing to search')
        }
    }

    serchName(null)
    serchName('mukter')


    // unknown types
    const getSpreedInMeterPerSecond = (value:unknown)=>{
        if(typeof value === 'number'){
            const convertedSpeed  = (value *1000) / 3600;
            console.log(`The speed is ${convertedSpeed} m/s`)
        }
        else if(typeof value === 'string'){
            const [result , unit] = value.split(' ')
            const convertedSpeed  = (parseFloat(result) *1000) / 3600;
            console.log(`The speed is ${convertedSpeed} m/s `)
        }else{
            console.log('Wrong input')
        }
    }

    getSpreedInMeterPerSecond(10)
    getSpreedInMeterPerSecond('1000 m/s')
    getSpreedInMeterPerSecond(null)

    // never type 
    const trowError = (msg:string): never =>{
        throw new Error(msg)
    }
    trowError('mushkil se error hogaya')









}