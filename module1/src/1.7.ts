{
   
    
// spread operator
// rest oparator
// destrucring

    
// learn sprea operator
const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
const bros2: string[] = ['Tonmoy', 'Nahid', 'Rahat']
bros1.push(...bros2)


const mentors1 ={
    prisma:'Firoz',
    redux: 'Mir',
    dbms: 'Mizan'
}
const mentors2 ={
    prisma:'Nahid',
    redux: 'Rahat',
    dbms: 'Tonmoy'
}
const mentorList ={
    ...mentors1,
    ...mentors2
}


// learn rest operator
//  const greetFrieds = (friend1, friend2, friend3)=>{
//     console.log(`Hi ${friend1} ${friend2} ${friend3}`)
//  }
//  greetFrieds('Abul', 'kabul', 'ubul')
 const greetFrieds = (...friends:string[])=>{
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend:string) => console.log(`hi ${friend}`))
 }
 greetFrieds('Abul', 'kabul', 'ubul', 'labul')










}