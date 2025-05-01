{

    // union type

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper' //  string leteral type
    // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper' //  string leteral type

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // // const newDeveloper : FrontendDeveloper = 'fakibazDeveloper'
    // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

    // type User ={
    //     name: string;
    //     email?:string;
    //     gender: 'male' | 'Female'
    //     bloodGroup: 'O+'| 'A+' | 'AB'
    // }

    // const user1:User ={
    //     name: 'mukter',
    //     gender: 'male',
    //     bloodGroup: 'O+'
    // }


    type FrontendDeveloper ={
        skills: string[];
        designation1: 'Fronend Developer'
    }
    type BackendDeveloper ={
        skills: string[];
        designation2: 'Backend Developer'
    }


    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
    const fullstackDeveloper : FullstackDeveloper ={
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'Fronend Developer',
        designation2:'Backend Developer'
    }









}