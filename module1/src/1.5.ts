// Reference Type --> Object

const user:{
    // company: string; // Type --> literal type
    readonly company: string;
    // company: 'Programming Hero';
    firstName:string; 
    midleName?: string;  // optional type
    lastName: string; 
    isMarried:boolean} = {
    company: 'Programming Hero',
    firstName:'MD Mukter',    
    lastName: 'Hossain',
    isMarried: false
}
// user.company = 'Ph'